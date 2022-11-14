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

  const handleClick = () => {
    const opts = {
      email: email,
      password: password,
    };
    fetch(
      "https://3001-mauriciio89-jwt-1ku18w4m7lz.ws-us72.gitpod.io/api/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(opts),
      }
    )
      .then((resp) => {
        if (resp.status === 200) return resp.json();
        else alert("there has been some error");
      })
      .then((data) => {
        // console.log(data);
        localStorage.setItem("accessToken", data.accessToken);
        console.log(localStorage.getItem("accessToken"));
        console.log("Este es el token");
        navigate("/private");
      })
      .catch((error) => {
        console.error("there was an error!!!", error);
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

            <form action="#">
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
                  <Link to="/" className="nav-link">Forgot your password?</Link>
                </a>
              </div>
              <div className="field button-field">
                <button onClick={handleClick}>Login</button>
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
