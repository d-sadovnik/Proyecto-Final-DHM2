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

export const Tracker = () => {
  return (
    <div
      className="profilebackground"
      style={{ backgroundImage: `url(${background})` }}
    >
      <hr className="mt-0 mb-4" />
      <div className="row">
        <div className="col-xl-8 w-50 mx-auto">
          {/* <!-- Account details card--> */}
          <div className="card mb-4">
            <div className="card-header">Data Manager</div>
            <div className="card-body">
              <form>
                {/* <!-- Form Row--> */}
                <div className="row gx-3 mb-3">
                  {/* <!-- Form Group (worked muscle groups)--> */}
                  <div className="col-md-12">
                    <label className="small mb-1" for="inputRoutinedescription">
                   Routine description
                    </label>
                    <input
                      className="form-control mb-2"
                      id="inputRoutinedescription"
                      type="text"
                      placeholder="Short routine description (optional)"
                    />
                  </div>
                  {/* <!-- Form Group (last name)--> */}
                  <div className="col-md-12">
                    <label className="small mb-1" for="inputMuscles">
                      Targeted muscles
                    </label>
                    <input
                      className="form-control"
                      id="inputMuscles"
                      type="text"
                      placeholder="Separate muscles using commas"
                    />
                  </div>
                </div>
                {/* <!-- Form Row --> */}
                <div className="row gx-3 mb-3">
                  {/* <!-- Form Group (calories)--> */}
                  <div className="col-md-3">
                    <label className="small mb-1" for="inputOrgName">
                      Calories
                    </label>
                    <input
                      className="form-control"
                      id="inputCalories"
                      type="number"
                      placeholder="Integer"
                    />
                  </div>
                  {/* <!-- Form Group (distance)--> */}
                  <div className="col-md-3">
                    <label className="small mb-1" for="inputDistance">
                      Distance
                    </label>
                    <input
                      className="form-control"
                      id="inputDistance"
                      type="number"
                      placeholder="KM"
                    />
                  </div>
                  {/* <!-- Form Group (duration)--> */}
                  <div className="col-md-3">
                    <label className="small mb-1" for="inputDuration">
                      Duration
                    </label>
                    <input
                      className="form-control"
                      id="inputDuration"
                      type="number"
                      placeholder="Minutes"
                    />
                  </div>
                  {/* <!-- Form Group (muscle mass)--> */}
                  <div className="col-md-3">
                    <label className="small mb-1" for="inputLocation">
                      Avg. Heart Rate
                    </label>
                    <input
                      className="form-control"
                      id="inputHeartrate"
                      type="number"
                      placeholder="Bpm"
                    />
                  </div>
                </div>
                {/* <!-- Form Row--> */}
                <div className="row gx-3 mb-3">
                  {/* <!-- Form Group (phone number)--> */}
                  <div className="col-md-6">
                    <label className="small mb-1" for="inputFacilities">
                      Facilities
                    </label>
                    <input
                      className="form-control"
                      id="inputFacilities"
                      type="text"
                      placeholder="Gym / Home / Other"
                    />
                  </div>
                  {/* <!-- Form Group (birthday)--> */}
                  <div className="col-md-6">
                    <label className="small mb-1" for="inputBirthday">
                      Routine Type
                    </label>
                    <input
                      className="form-control"
                      id="inputRoutinetype"
                      type="text"
                      name="routineType"
                      placeholder="Default / Free"
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
  );
};
