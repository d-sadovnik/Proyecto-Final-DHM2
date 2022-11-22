import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import background from "./../../img/yellow-abstract-background.jpg";
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/default.css";

export const Default = () => {
  const buscarRutinas = (e, id) => {
    e.preventDefault();
    actions
      .get_exercisesbygroup(id)
      .then((resp) => {
        console.log("prueba", resp);
        /*  navigate("/login"); */
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [groupid, setGroupid] = useState();
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.get_musclegroup();
  }, []);
  console.log(store.musclegroup);

  return (
    <div>
      <>
        <section
          className="containerdefault"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="contentDefault">
            <header className="defaultHeader">Target Group</header>

            <div>
              {store.musclegroup.map((item, index) => (
                <div className="musclegroup" key={index}>
                  <input
                    type="radio"
                    id="muscleCheck"
                    name="interest"
                    value={item.id}
                    onClick={(e) => setGroupid(e.target.value)}
                  />
                  <label className="freeLabel">{item.muscle_group}</label>
                </div>
              ))}
            </div>
            <div className="default button">
              <button onClick={(e) => buscarRutinas(e, groupid)}>
                Generate Routine
              </button>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};
