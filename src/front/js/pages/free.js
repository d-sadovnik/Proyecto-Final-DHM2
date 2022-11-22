import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import background from "./../../img/abstract-orange-and-black.jpg";
import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "../../styles/free.css";

export const Free = () => {
  const navigate = useNavigate();

  const [checkone, setCheckone] = useState(false);
  const [musculoSelect, setMusculoSelect] = useState([]);
  
  const { store, actions } = useContext(Context);
  const params = useParams();
  const buscarRutinas = (e) => {
    e.preventDefault();
    console.log(musculoSelect);
    const rutinaLibre = [];
    
    musculoSelect.forEach((element) => {
      actions
        .get_free_exercise(element.id)
        .then((resp) => {
          rutinaLibre.push(resp);
          console.log("todos los ejercicios", rutinaLibre);
          console.log(resp);
          Navigate("/dayroutine");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  useEffect(() => {
    actions.get_muscles();
  }, []);
  console.log(store.muscles);

  return (
    <>
      {store.logeado ? (
        <div>
          <section
            className="containerfree"
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className="contentFree">
              <header className="freeHeader">Target Muscles</header>

              <div>
                {store.muscles.map((item, index) => (
                  <div className="muscles">
                    <input
                      type="checkbox"
                      // checked={checkone}
                      onClick={(e) => setMusculoSelect(e.target.value)}
                      id="muscleCheck"
                      name="interest"
                      value={item.id}
                      onche
                    />
                    <label className="freeLabel">{item.muscles}</label>
                   
                  </div>
                ))}
              </div>
           
              <div className="free button">
                <Link to="/dayroutine" className="linktoroutine">
                  <button onClick={buscarRutinas}>Generate Routine</button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <h1>NO PUEDES ESTAR AQUI</h1>
      )}
    </>
  );
};
Free.propTypes = { match: PropTypes.object };
