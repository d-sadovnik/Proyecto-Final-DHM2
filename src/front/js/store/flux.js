const apiUrl = process.env.BACKEND_URL;

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      muscles: [],
      musclegroup: [],
      exercises: [],
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

      get_muscles: async () => {
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/listmuscle",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await resp.json();
          setStore({ muscles: data.muscle });
        } catch (error) {
          console.log("error al cargar get muscles", error);
        }
      },

      get_musclegroup: (id) => {
        fetch(process.env.BACKEND_URL + "/api/listmusclegroup")
          .then((resp) => resp.json())
          .then((resp) => setStore({ musclegroup: resp.result.properties }))
          .catch((err) => console.error(err));
      },
      get_exercises: (id) => {
        fetch(process.env.BACKEND_URL + "/api/listexercises")
          .then((resp) => resp.json())
          .then((resp) => setStore({ exercises: resp.result.properties }))
          .catch((err) => console.error(err));
      },
      get_exermuscleqty: (id) => {
        fetch(process.env.BACKEND_URL + "/api/listmuscle/<int:id>/<int:qty>")
          .then((resp) => resp.json())
          .then((resp) => setStore({ exercises: resp.result.properties }))
          .catch((err) => console.error(err));
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
          const resp = await fetch(process.env.BACKEND_URL + "/api/signup", {
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
          const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
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

      forgotpassword: async (body) => {
        console.log(body);
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/forgotpassword",
            {
              method: "PUT",
              body: JSON.stringify(body),
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            }
          );
          const data = await resp.json();
          console.log(data);
          return data;
        } catch (error) {
          console.log("Error registro", error);
        }
      },

      exercisedb: async (body) => {
        console.log(body);
        try {
          const resp = await fetch(
            "https://exercisedb.p.rapidapi.com/exercises",
            {
              method: "GET",
              headers: {
                "X-RapidAPI-Key":
                  "900f8fa783msh18fba5f9e2a4c3bp1b7bbfjsne95fd5d48576",

                "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
              },
            }
          );
          const data = await resp.json();
          console.log(data);
          return data;
        } catch (error) {
          console.log("Error registro", error);
        }
      },
    },
  };
};

export default getState;
