import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import background from "./../../img/abstract-orange-and-black.jpg";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/dayroutine.css";

export const Dayroutine = () => {
  return (
    <div>
      <>
        <section
          className="containerdayroutine"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="contentDayroutine">
              <header className="dayroutineHeader">Target Muscles</header>

              <div className="muscles">
                  <label className="dayroutineLabel" for="biceps">Exercise</label>
                  <label className="dayroutineLabel" for="biceps">Muscles</label>
                </div>
                
                <div className="muscles">
                  <label className="dayroutineLabel" for="biceps">Exercise</label>
                  <label className="dayroutineLabel" for="biceps">Muscles</label>
                </div>

                <div className="muscles">
                  <label className="dayroutineLabel" for="biceps">Exercise</label>
                  <label className="dayroutineLabel" for="biceps">Muscles</label>
                </div>
            </div>
        </section>
      </>
    </div>
  );
};
