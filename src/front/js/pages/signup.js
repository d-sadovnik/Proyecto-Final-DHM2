import { Context } from "../store/appContext";
import "../../styles/signup.css";
import background from "./../../img/picfondo2.jpg";
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

<link
  href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
  rel="stylesheet"
></link>;

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [msjError, setMsjError] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    console.log("el boton esta funcionando");
    e.preventDefault();
    setMsjError("");
    if (password !== password2) {
      alert("Las contraseñas no coinciden");
    } else {
      const body = {
        email: email,
        password: password,
      };
      actions
        .signup(body)
        .then((resp) => {
          console.log(resp);
          // navigate("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <section
        className="containersignup"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="form login">
          <div className="form-content">
            <header>Signup</header>

            <form>
              <div className="field input-field">
                <input
                  type="email"
                  placeholder="Email"
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Password"
                  className="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="password"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                />
              </div>
              <div className="field button-field">
                <button type="submit" id="submit" onClick={onSubmit}>
                  Signup
                </button>
              </div>
              <div className="form-link">
                <span>
                  Already have an account?{" "}
                  <a>
                    <Link class="nav-link" to="/login">
                      Login
                    </Link>
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
