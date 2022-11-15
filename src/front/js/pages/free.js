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
          <div className="free form">
            <div className="free form-content">
              <header className="free header">Select Muscles</header>

              <div className="muscles">
                  <input type="checkbox" id="muscleCheck" name="interest" value="biceps" />
                  <label className="free label" for="biceps">Shoulders</label>
                  <input type="number" id="numberOfexercises" name="numberofexercises" placeholder="#" />
                </div>
                <div className="muscles">
                  <input type="checkbox" id="muscleCheck" name="interest" value="biceps" />
                  <label className="free label" for="biceps">Triceps</label>
                  <input type="number" id="numberOfexercises" name="numberofexercises" placeholder="#" />
                </div>
                <div className="muscles">
                  <input type="checkbox" id="muscleCheck" name="interest" value="biceps" />
                  <label className="free label" for="biceps">Biceps</label>
                  <input type="number" id="numberOfexercises" name="numberofexercises" placeholder="#" />
                </div>
                <div className="muscles">
                  <input type="checkbox" id="muscleCheck" name="interest" value="biceps" />
                  <label className="free label" for="biceps">Chest</label>
                  <input type="number" id="numberOfexercises" name="numberofexercises" placeholder="#" />
                </div>
                <div className="muscles">
                  <input type="checkbox" id="muscleCheck" name="interest" value="biceps" />
                  <label className="free label" for="biceps">Back</label>
                  <input type="number" id="numberOfexercises" name="numberofexercises" placeholder="#" />
                </div>
                <div className="muscles">
                  <input type="checkbox" id="muscleCheck" name="interest" value="biceps" />
                  <label className="free label" for="biceps">Legs</label>
                  <input type="number" id="numberOfexercises" name="numberofexercises" placeholder="#" />
                </div>
                <div className="muscles">
                  <input type="checkbox" id="muscleCheck" name="interest" value="biceps" />
                  <label className="free label" for="biceps">Core</label>
                  <input type="number" id="numberOfexercises" name="numberofexercises" placeholder="#" />
                </div>

                <div className="free button">
                  <button>Generate Routine</button>
                </div>
                
            </div>
          </div>
        </section>
      </>
    </div>
  );
};
