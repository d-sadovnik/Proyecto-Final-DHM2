import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import defaultroutine from "../../img/defaultcard.png";
import freeroutine from "../../img/freecard.png";
import "../../styles/routines.css";

export const Routines = () => {
  const [type, setType] = useState(2);

  return (
    <div
      className={
        type === 0
          ? "containerRoutines0"
          : type === 1
          ? "containerRoutines1"
          : "containerRoutines"
      }
    >
      <div className="content">
        <div className="imgDefault">
          <Link to="/default">
            <img
              src={defaultroutine}
              alt="..."
              className="defaultpic"
              onMouseEnter={() => {
                setType(0);
              }}
              onMouseLeave={() => {
                setType(2);
              }}
            />
          </Link>
        </div>
        <div className="imgFree">
          <Link to="/free">
            <img
              src={freeroutine}
              alt="..."
              className="freepic"
              onMouseEnter={() => {
                setType(1);
              }}
              onMouseLeave={() => {
                setType(2);
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
