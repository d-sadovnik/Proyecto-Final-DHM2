import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import background from "./../../img/picfondo2.jpg";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/free.css";

export const Free = () => {
  return (
    <div>
      <>
        <section
          className="containerfree"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="form login">
            <div className="form-content">
              <header>Select Muscles</header>

              <form action="#">
              <div className="muscles">
                  <input type="checkbox" id="muscleCheck" name="interest" value="biceps" />
                  <label for="biceps">Shoulders</label>
                  <input type="number" id="numberOfexercises" name="numberofexercises" placeholder="#" />
                </div>
                <div className="muscles">
                  <input type="checkbox" id="muscleCheck" name="interest" value="biceps" />
                  <label for="biceps">Triceps</label>
                  <input type="number" id="numberOfexercises" name="numberofexercises" placeholder="#" />
                </div>
                <div className="muscles">
                  <input type="checkbox" id="muscleCheck" name="interest" value="biceps" />
                  <label for="biceps">Biceps</label>
                  <input type="number" id="numberOfexercises" name="numberofexercises" placeholder="#" />
                </div>
                <div className="muscles">
                  <input type="checkbox" id="muscleCheck" name="interest" value="biceps" />
                  <label for="biceps">Chest</label>
                  <input type="number" id="numberOfexercises" name="numberofexercises" placeholder="#" />
                </div>
                <div className="muscles">
                  <input type="checkbox" id="muscleCheck" name="interest" value="biceps" />
                  <label for="biceps">Back</label>
                  <input type="number" id="numberOfexercises" name="numberofexercises" placeholder="#" />
                </div>
                <div className="muscles">
                  <input type="checkbox" id="muscleCheck" name="interest" value="biceps" />
                  <label for="biceps">Legs</label>
                  <input type="number" id="numberOfexercises" name="numberofexercises" placeholder="#" />
                </div>
                <div className="muscles">
                  <input type="checkbox" id="muscleCheck" name="interest" value="biceps" />
                  <label for="biceps">Core</label>
                  <input type="number" id="numberOfexercises" name="numberofexercises" placeholder="#" />
                </div>

                <div className="field button-field">
                  <button>Generate Routine</button>
                </div>
                
              </form>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};
