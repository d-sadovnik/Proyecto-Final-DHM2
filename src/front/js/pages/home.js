import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import background from "../../img/dark-background-for-home.jpg";
import boostresults from "../../img/Home-boost-2.gif";
import limitbreaker from "../../img/Home-limitbreaker-2.gif";
import trackresults from "../../img/track-results3.gif";
import thumb1 from "../../img/icon-results.png";
import thumb2 from "../../img/icon-chart.png";
import thumb3 from "../../img/icon-dumbell.png";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [type, setType] = useState(0);
  return (
    <div
      className="containerhome"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="content">
        <div className="textBox">
          <h1>ROUTINE NATION</h1>
          <p>
            We are a solution to your daily workout routine focused on
            automation, efficiency and independence. Access your exercises with
            ease without the need for a personal trainers or prepaid
            memberships. Speed is key if you want to make the most out of your
            training sessions, so stop improvising training plans on a daily
            basis and focus on getting the job done. Our massive muscle catalog
            is designed to suit the needs of beginners and experts alike, to
            guide you in your fitness journey for the long run.
          </p>

          <Link className="nav-link" to="/signup">
            START NOW
          </Link>
        </div>
        <div className="imgBox">
          <img
            src={
              type === 0
                ? boostresults
                : type === 1
                ? limitbreaker
                : trackresults
            }
            alt="..."
            className="homepic"
          />
        </div>
        <ul className="thumb">
          <li>
            <img
              src={thumb1}
              onClick={() => {
                setType(0);
              }}
            />
          </li>
          <li>
            <img
              src={thumb3}
              onClick={() => {
                setType(1);
              }}
            />
          </li>
          <li>
            <img
              src={thumb2}
              onClick={() => {
                setType(2);
              }}
            />
          </li>
        </ul>
        ;
        {/* <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div> */}
      </div>
    </div>
  );
};
