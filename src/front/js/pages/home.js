import React, { useContext } from "react";
import { Context } from "../store/appContext";
import background from "../../img/dark-background-for-home.jpg";
import boostresults from "../../img/Home-boost-your-results.mp4";
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
          We are a solution to your daily workout routine focused on automation, efficiency and independence. Cut the middle-man, make the most of your training sessions and boost your results. 
        </p>
        <a>
        <Link class="nav-link" to="/signup">
                      START NOW
                    </Link>
        </a>
      </div>
      <div className="imgBox">
        <video src={boostresults} type="video/mp4" />
      </div>
      {/* <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div> */}
    </div>
    </div>
  );
};
