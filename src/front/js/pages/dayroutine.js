import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import background from "./../../img/abstract-orange-and-black.jpg";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/free.css";

export const Dayroutine = () => {
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
                  <label className="freeLabel" for="biceps">Exercise</label>
                  <label className="freeLabel" for="biceps">Muscles</label>
                </div>
                
                <div className="muscles">
                  <label className="freeLabel" for="biceps">Exercise</label>
                  <label className="freeLabel" for="biceps">Muscles</label>
                </div>

                <div className="muscles">
                  <label className="freeLabel" for="biceps">Exercise</label>
                  <label className="freeLabel" for="biceps">Muscles</label>
                </div>
            </div>
        </section>
      </>
    </div>
  );
};
