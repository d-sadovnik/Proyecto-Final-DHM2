const apiUrl = process.env.BACKEND_URL;

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      logeado: false,
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      signup: async (body) => {
        console.log(body);
        try {
          const resp = await fetch(apiUrl + "/signup", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          });
          const data = await resp.json();
          console.log(data);
          return data;
        } catch (error) {
          console.log("Error registro", error);
        }
      },
      login: async (body) => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/login", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await resp.json();
          //   setStore({ accessToken: data.accessToken });
          //   setStore({ user: { nombre: data.nombre } });
          //   localStorage.setItem("accessToken", data.accessToken);
          localStorage.setItem("id", data.id);
          console.log(data);
          setStore({ logeado: true });
          return data;
        } catch (error) {
          console.log("Error login", error);
        }
      },
    },
  };
};

export default getState;
