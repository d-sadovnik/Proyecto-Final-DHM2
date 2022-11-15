import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LOGO from "../../img/logo3.png";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={LOGO} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {localStorage.getItem("token") ? (
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-black"
                    aria-current="page"
                    onClick={() => {
                      localStorage.removeItem("token");
                      navigate("/login");
                    }}
                  >
                    Log out
                  </button>
                </li>
              ) : (
                <>
                  <Link className="nav-link" aria-current="page" to="/signup">
                    Signup
                  </Link>

                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </>
              )}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/routines">
                Routines
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tracker">
                Tracker
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
