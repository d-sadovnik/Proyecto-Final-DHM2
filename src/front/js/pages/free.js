import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import background from "./../../img/abstract-orange-and-black.jpg";
import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "../../styles/free.css";

export const Free = () => {
  const [checkone, setCheckone] = useState(false);
  const [musculoSelect, setMusculoSelect] = useState(null);
  const [repeticiones, setRepeticiones] = useState([]);
  const { store, actions } = useContext(Context);
  const params = useParams();
  const buscarRutinas = (e) => {
    e.preventDefault();
    console.log(musculoSelect);
    console.log(repeticiones);
    const rutinaLibre = [];
    repeticiones.forEach((element) => {
      actions
        .get_free_exercise(element.id, element.valor)
        .then((resp) => {
          rutinaLibre.push(resp);
          console.log("todos los ejercicios", rutinaLibre);
          console.log(resp);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const onInputChange = (index, e) => {
    console.log(index);
    console.log(e);
    const actualRepeticiones = repeticiones;
    let valores = { id: index, valor: e };
    setRepeticiones((current) =>
      current.map((obj) => {
        if (obj.id === index) {
          return { ...obj, valor: e };
        }

        return obj;
      })
    );

    if (repeticiones == actualRepeticiones) {
      setRepeticiones((current) => [...current, valores]);
    }

    // console.log(holaa);
    console.log(repeticiones);
  };
  useEffect(() => {
    actions.get_muscles();
  }, []);
  console.log(store.muscles);

  return (
    <div>
      <>
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
                    onChange={(e) => setMusculoSelect(e.target.value)}
                    id="muscleCheck"
                    name="interest"
                    value={item.id}
                  />
                  <label className="freeLabel">{item.muscles}</label>
                  <input
                    type="number"
                    id="numberOfexercises"
                    name="numberofexercises"
                    placeholder="#"
                    min="0"
                    max="10"
                    value={repeticiones[index]?.valor}
                    onChange={(e) =>
                      onInputChange(musculoSelect, e.target.value)
                    }
                  />
                </div>
              ))}
            </div>
            {/* <div className="muscles">
                  <input type="checkbox" id="muscleCheck" name="interest" value="biceps" />
                  <label className="freeLabel" for="biceps">Triceps</label>
                  <input type="number" id="numberOfexercises" name="numberofexercises" placeholder="#" />
                </div>
                <div className="muscles">
                  <input type="checkbox" id="muscleCheck" name="interest" value="biceps" />
                  <label className="freeLabel" for="biceps">Biceps</label>
                  <input type="number" id="numberOfexercises" name="numberofexercises" placeholder="#" />
                </div>
                <div className="muscles">
                  <input type="checkbox" id="muscleCheck" name="interest" value="biceps" />
                  <label className="freeLabel" for="biceps">Chest</label>
                  <input type="number" id="numberOfexercises" name="numberofexercises" placeholder="#" />
                </div>
                <div className="muscles">
                  <input type="checkbox" id="muscleCheck" name="interest" value="biceps" />
                  <label className="freeLabel" for="biceps">Back</label>
                  <input type="number" id="numberOfexercises" name="numberofexercises" placeholder="#" />
                </div>
                <div className="muscles">
                  <input type="checkbox" id="muscleCheck" name="interest" value="biceps" />
                  <label className="freeLabel" for="biceps">Legs</label>
                  <input type="number" id="numberOfexercises" name="numberofexercises" placeholder="#" />
                </div>
                <div className="muscles">
                  <input type="checkbox" id="muscleCheck" name="interest" value="biceps" />
                  <label className="freeLabel" for="biceps">Core</label>
                  <input type="number" id="numberOfexercises" name="numberofexercises" placeholder="#" />
                </div> */}

            <div className="free button">
              <Link to="/dayroutine" className="linktoroutine">
                <button onClick={buscarRutinas}>Generate Routine</button>
              </Link>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};
Free.propTypes = { match: PropTypes.object };
