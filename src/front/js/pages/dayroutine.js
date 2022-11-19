import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import background from "./../../img/dark-background-for-home.jpg";
import cardbackground from "./../../img/dayroutine_background.jpg"
import React, { useContext, useState } from "react"; 
import { Link } from "react-router-dom";
import "../../styles/dayroutine.css";

export const Dayroutine = () => {
  return (
    <div>
      <>
        <section
          className="containerdayroutine overflow-auto flex-nowrap"
          style={{ backgroundImage: `url(${background})` }}
        >
          {/* // this is where the cards are at// */}
          <div className="card col-2 m-2 cardStyle bg-image card shadow-1-strong" style={{ backgroundImage: `url(${cardbackground})` }}>
            <img
              src={
                "https://fitnessprogramer.com/wp-content/uploads/2021/06/Incline-Dumbbell-Row.gif"
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Exercise - Muscle</h5>
              <div className="container d-flex ">
                <div className="float-start"></div>
                <div className="float-end">
                  <p>This is the description of the above mentioned exercise</p>
                </div>
              </div>
            </div>
          </div>
          {/* // this is where the cards end// */}
        
        </section>
      </>
    </div>
  );
};
