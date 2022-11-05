import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LOGO from "../../img/logo3.png";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-black">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          <img src={LOGO} />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/signup">
                Signup
              </Link>
            </li>
            <li class="nav-item">
              {localStorage.getItem("token") ? (
                <li class="nav-item">
                  <button
                    class="nav-link btn btn-black"
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
                <Link class="nav-link" to="/login">
                  Login
                </Link>
              )}
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/routines">
                Routines
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/tracker">
                Tracker
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/profile">
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
