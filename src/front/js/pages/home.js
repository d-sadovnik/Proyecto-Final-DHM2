import React, { useContext } from "react";
import { Context } from "../store/appContext";
import background from "../../img/dark-background-for-home.jpg";
import boostresults from "../../img/Home-boost-2.gif";
import thumb1 from "../../img/dumbell.png";
import thumb2 from "../../img/chart.png";
import thumb3 from "../../img/results.png";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="containerhome" style={{ backgroundImage: `url(${background})` }}>
    <div className="content">
      <div className="textBox">
        <h1>ROUTINE NATION</h1>
        <p>
          We are a solution to your daily workout routine focused on automation, efficiency and independence. Access your exercises with ease without the need for a personal trainers or prepaid memberships. Speed is key if you want to make the most out of your training sessions, so stop improvising training plans on a daily basis and focus on getting the job done. Our massive muscle catalog is designed to suit the needs of beginners and experts alike, to guide you in your fitness journey for the long run. 
        </p>
        <a>
        <Link class="nav-link" to="/signup">
                      START NOW
                    </Link>
        </a>
      </div>
      <div className="imgBox">
        <img src={boostresults} alt="..." className="homepic"/>
      </div>
      <ul className="thumb">
        <li><img src={thumb1}/></li>
        <li><img src={thumb2}/></li>
        <li><img src={thumb3}/></li>
      </ul>
      {/* <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div> */}
    </div>
    </div>
  );
};
