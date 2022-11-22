const apiUrl = process.env.BACKEND_URL;

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      muscles: [],
      musclegroup: [],
      exercises: [],
      free_exercise: [],
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

      get_free_exercise: async (id) => {
        console.log("musculos desde flux", id_musculo);
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/listmuscle/" + id, 
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await resp.json();
          console.log("data desde flux", data);
          setStore({ free_exercise: data.exercise });
          return data.exercise;
        } catch (error) {
          console.log("error al cargar ejercicios free", error);
        }
      },

      get_musclegroup: async () => {
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/listmusclegroup",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await resp.json();
          setStore({ musclegroup: data.muscle_group });
        } catch (error) {
          console.log("error al cargar get muscles", error);
        }
      },
      get_exercisesbygroup: async (id) => {
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/musclegroup/" + id,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await resp.json();
          console.log("data desde flux", data);
          setStore({ exercises: data.predetermined_exercises });
          return data.predetermined_exercises;
        } catch (error) {
          console.log("error al cargar ejercicios free", error);
        }
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
          localStorage.setItem("accessToken", data.accessToken);

          console.log(data);
          setStore({ logeado: true });
          return data;
        } catch (error) {
          console.log("Error login", error);
        }
      },

      logeado: async () => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/logeado", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          });
          const data = await resp.json();
          if (data.message == true) {
            setStore({ logeado: true });
            return true;
          } else {
            setStore({ logeado: false });
            return false;
          }
        } catch (error) {
          console.log("error al cargar", error);
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
