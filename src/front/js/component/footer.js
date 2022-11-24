import React, { Component } from "react";

export const Footer = () => (
  <footer
    className="bg-dark text-center text-white margin-bottom:0"
    tabindex="-1"
  >
    {/* Grid container */}
    <div className="container p-4">
      {/* Section: Social media */}
      <section className="mb-4">
        {/* Facebook */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-facebook-f" />
        </a>
        {/* Twitter */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-twitter" />
        </a>
        {/* Google */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-google" />
        </a>
        {/* Instagram */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-instagram" />
        </a>
        {/* Linkedin */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-linkedin-in" />
        </a>
        {/* Github */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-github" />
        </a>
      </section>
      {/* Section: Social media */}
      {/* Section: Form */}
      <section>
        <form>
          {/*Grid row*/}
          <div className="row d-flex justify-content-center">
            {/*Grid column*/}
            <div className="col-auto">
              <p className="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-md-5 col-12">
              {/* Email input */}
              <div className="form-outline form-white mb-4">
                <input
                  type="email"
                  id="form5Example21"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form5Example21">
                  Email address
                </label>
              </div>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-auto">
              {/* Submit button */}
              <button type="submit" className="btn btn-outline-light mb-4">
                Subscribe
              </button>
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </form>
      </section>
      {/* Section: Form */}
      {/* Section: Text */}
      <section className="mb-4">
        <p>
          What's the key to success? The key is, there is no key. Be humble,
          hungry, and the hardest worker in any room.
        </p>
        <p>Failure's not an option. It's just a step.</p>
      </section>
      {/* Section: Text */}
      {/* Section: Links */}

      {/* Section: Links */}
    </div>
    {/* Grid container */}
    {/* Copyright */}
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      © 2020 Copyright:
      <a className="text-white" href="https://mdbootstrap.com/">
        MDBootstrap.com
      </a>
    </div>
    {/* Copyright */}
  </footer>
);
