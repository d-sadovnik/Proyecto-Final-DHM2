import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import background from "./../../img/abstract-orange-and-black.jpg";
import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "../../styles/free.css";

export const Free = () => {
  const [checkone, setCheckone] = useState(false);
  const { store, actions } = useContext(Context);
  const params = useParams();
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

            <div className="muscles">
              <input
                type="checkbox"
                checked={checkone}
                onChange={(e) => setCheckone(e.target.checked)}
                id="muscleCheck"
                name="interest"
                value="biceps"
              />
              <label className="freeLabel">{store.muscles?.muscle_name}</label>
              <input
                type="number"
                id="numberOfexercises"
                name="numberofexercises"
                placeholder="#"
              />
            </div>
            <div>
              {store.muscles.map((item, index) => (
                <div className="muscles">
                  <input
                    type="checkbox"
                    checked={checkone}
                    onChange={(e) => setCheckone(e.target.checked)}
                    id="muscleCheck"
                    name="interest"
                    value="biceps"
                  />
                  <label className="freeLabel">{item.muscles}</label>
                  <input
                    type="number"
                    id="numberOfexercises"
                    name="numberofexercises"
                    placeholder="#"
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
                <button>Generate Routine</button>
              </Link>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};
Free.propTypes = { match: PropTypes.object };
