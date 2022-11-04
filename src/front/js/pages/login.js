import { Context } from "../store/appContext";
import "../../styles/signup.css";
import background from "../../img/functional-block-image.jpg";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };
    console.log(body);
    actions
      .login(body)
      .then((resp) => {
        console.log(resp);
        // navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <section
        className="containersignup"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="form login">
          <div className="form-content">
            <header>Login</header>

            <form onSubmit={onSubmit}>
              <div className="field input-field">
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-link">
                <a>
                  <Link to="/" className="nav-link">
                    Forgot your password?
                  </Link>
                </a>
              </div>
              <div className="field button-field">
                <button type="submit">Login</button>
              </div>
              <div className="form-link">
                <span>
                  Don't have an account yet?{" "}
                  <a>
                    <Link class="nav-link" to="/signup">
                      Signup
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
