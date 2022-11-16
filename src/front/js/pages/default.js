import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import background from "./../../img/yellow-abstract-background.jpg";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/default.css";


export const Default = () => {
    return(
        <div>
        <>
          <section
            className="containerdefault"
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className="contentDefault">
                <header className="defaultHeader">Target Group</header>
  
                <div className="muscles">
                    <input type="checkbox" id="muscleCheck" name="interest" value="biceps" />
                    <label className="freeLabel" for="biceps">Upper Body</label>

                  </div>
                  <div className="muscles">
                    <input type="checkbox" id="muscleCheck" name="interest" value="biceps" />
                    <label className="freeLabel" for="biceps">Lower Body</label>

                  </div>
                  <div className="muscles">
                    <input type="checkbox" id="muscleCheck" name="interest" value="biceps" />
                    <label className="freeLabel" for="biceps">Core</label>
                   
                  </div>
                 
  
                  <div className="default button">
                    <button>Generate Routine</button>
                  </div>
                  
              </div>
          </section>
        </>
      </div>
    );
  };
  