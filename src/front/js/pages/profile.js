import { Context } from "../store/appContext";
import "../../styles/profile.css";
import background from "./../../img/picfondo2.jpg";
import avatarpic from "./../../img/avatar-profile-2.png";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

<link
  href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
  rel="stylesheet"
></link>;

export const Profile = () => {
  const { store } = useContext(Context);
  return (
    <>
      {store.logeado ? (
        <div
          className="profilebackground"
          style={{ backgroundImage: `url(${background})` }}
        >
          <hr className="mt-0 mb-4" />
          <div className="row">
            <div>
              {/* <!-- Profile picture card--> */}
              <div className="card mb-4 mb-xl-0 w-25 mx-auto">
                <div className="card-header">Profile Picture</div>
                <div className="card-body text-center">
                  {/* <!-- Profile picture image--> */}
                  <img
                    className="img-account-profile rounded-circle mb-2"
                    src={avatarpic}
                    alt=""
                  />
                  {/* <!-- Profile picture help block--> */}
                  <div className="small font-italic text-muted mb-4">
                    JPG or PNG no larger than 5 MB
                  </div>
                  {/* <!-- Profile picture upload button--> */}
                  <div className="field button-field">
                    <button>Upload new image</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 w-75 mx-auto">
              {/* <!-- Account details card--> */}
              <div className="card mb-4 mt-4">
                <div className="card-header">Account Details</div>
                <div className="card-body">
                  <form>
                    {/* <!-- Form Group (username)--> */}
                    <div className="mb-3">
                      <label className="small mb-1" for="inputUsername">
                        Username (how your name will appear to other users on
                        the site)
                      </label>
                      <input
                        className="form-control"
                        id="inputUsername"
                        type="text"
                        placeholder="Type your username"
                      />
                    </div>
                    {/* <!-- Form Row--> */}
                    <div className="row gx-3 mb-3">
                      {/* <!-- Form Group (first name)--> */}
                      <div className="col-md-6">
                        <label className="small mb-1" for="inputFirstName">
                          First name
                        </label>
                        <input
                          className="form-control"
                          id="inputFirstName"
                          type="text"
                          placeholder="Type your first name"
                        />
                      </div>
                      {/* <!-- Form Group (last name)--> */}
                      <div className="col-md-6">
                        <label className="small mb-1" for="inputLastName">
                          Last name
                        </label>
                        <input
                          className="form-control"
                          id="inputLastName"
                          type="text"
                          placeholder="Type your last name"
                        />
                      </div>
                    </div>
                    {/* <!-- Form Row --> */}
                    <div className="row gx-3 mb-3">
                      {/* <!-- Form Group (height)--> */}
                      <div className="col-md-3">
                        <label className="small mb-1" for="inputOrgName">
                          Height
                        </label>
                        <input
                          className="form-control"
                          id="inputOrgName"
                          type="number"
                          placeholder="Height in CM"
                        />
                      </div>
                      {/* <!-- Form Group (weight)--> */}
                      <div className="col-md-3">
                        <label className="small mb-1" for="inputLocation">
                          Weight
                        </label>
                        <input
                          className="form-control"
                          id="inputLocation"
                          type="number"
                          placeholder="Weight in KG"
                        />
                      </div>
                      {/* <!-- Form Group (bodyfat)--> */}
                      <div className="col-md-3">
                        <label className="small mb-1" for="inputLocation">
                          Body Fat
                        </label>
                        <input
                          className="form-control"
                          id="inputLocation"
                          type="number"
                          placeholder="Body fat in %"
                        />
                      </div>
                      {/* <!-- Form Group (muscle mass)--> */}
                      <div className="col-md-3">
                        <label className="small mb-1" for="inputLocation">
                          Muscle Mass
                        </label>
                        <input
                          className="form-control"
                          id="inputLocation"
                          type="number"
                          placeholder="Muscle mass in KG"
                        />
                      </div>
                    </div>
                    {/* <!-- Form Group (email address)--> */}
                    <div className="mb-3">
                      <label className="small mb-1" for="inputEmailAddress">
                        Email address
                      </label>
                      <input
                        className="form-control"
                        id="inputEmailAddress"
                        type="email"
                        placeholder="Type your email address"
                      />
                    </div>
                    {/* <!-- Form Row--> */}
                    <div className="row gx-3 mb-3">
                      {/* <!-- Form Group (phone number)--> */}
                      <div className="col-md-6">
                        <label className="small mb-1" for="inputPhone">
                          Phone number
                        </label>
                        <input
                          className="form-control"
                          id="inputPhone"
                          type="number"
                          placeholder="Type your phone number"
                        />
                      </div>
                      {/* <!-- Form Group (birthday)--> */}
                      <div className="col-md-6">
                        <label className="small mb-1" for="inputBirthday">
                          Birthday
                        </label>
                        <input
                          className="form-control"
                          id="inputBirthday"
                          type="date"
                          name="birthday"
                          placeholder="Type your birthday"
                        />
                      </div>
                    </div>
                    {/* <!-- Save changes button--> */}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="field button">
                          <button>Save changes</button>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="field button">
                          <button>View history</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>NO PUEDES ESTAR AQUI</h1>
      )}
    </>
  );
};
