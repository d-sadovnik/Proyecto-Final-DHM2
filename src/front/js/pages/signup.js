import { Context } from "../store/appContext";
import "../../styles/signup.css";
import background from "./../../img/picfondo2.jpg";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

<link
  href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
  rel="stylesheet"
></link>;

export const Signup = () => {
  return (
    <>
        <section className="containersignup" style={{backgroundImage: `url(${background})`}}>
          <div className="form login">
            <div className="form-content">
              <header>Signup</header>

              <form action="#">
                <div className="field input-field">
                  <input type="email" placeholder="Email" className="input" />
                </div>
                <div className="field input-field">
                  <input
                    type="password"
                    placeholder="Password"
                    className="password"
                  />
                </div>
                <div className="field input-field">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="password"
                  />
                </div>
                <div className="field button-field">
                  <button>Signup</button>
                </div>
                <div className="form-link">
                  <span>
                    Already have an account? <a><Link class="nav-link" to="/login">Login</Link></a>
                    </span>
                </div>
              </form>
            </div>
          </div>
        </section>
    </>
  );
};
