import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import background from "./../../img/picfondo2.jpg";
import calories from "./../../img/historytrackericons/calories_icon.png";
import date from "./../../img/historytrackericons/date_icon.png";
import routinedescription from "./../../img/historytrackericons/routine_description_icon.png";
import targetmuscles from "./../../img/historytrackericons/target_muscles_icon.png";
import distance from "./../../img/historytrackericons/distance_icon.png";
import duration from "./../../img/historytrackericons/duration_icon.png";
import heartrate from "./../../img/historytrackericons/heart_rate_icon.png";
import facilities from "./../../img/historytrackericons/facilities_icon.png";
import routinetype from "./../../img/historytrackericons/routine_type_icon.png";
import "../../styles/historytracker.css";

export const Historytracker = () => { 
    return (
		<>
		{store.logeado ? (
        <div
          className="supercontainerhistorytracker overflow-auto flex-nowrap"
          style={{ backgroundImage: `url(${background})` }}
        >
        <div class="containerhistorytracker">
	<table>
		<thead>
			<tr>
				<th>Icon</th>
				<th>Field</th>
				<th>Result</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><img src={date} className="tableiconstracker"/></td>
				<td>Date</td>
				<td>dd/mm/yy</td>
			</tr>
			<tr>
				<td><img src={routinedescription} className="tableiconstracker"/></td>
				<td>Routine Description</td>
				<td>String</td>
			</tr>
			<tr>
				<td><img src={targetmuscles} className="tableiconstracker"/></td>
				<td>Targeted muscles</td>
				<td>String</td>
			</tr>
			<tr>
				<td><img src={calories} className="tableiconstracker"/></td>
				<td>Calories</td>
				<td>Integer</td>
			</tr>
			<tr>
				<td><img src={distance} className="tableiconstracker"/></td>
				<td>Distance</td>
				<td>KM</td>
			</tr>
			<tr>
				<td><img src={duration} className="tableiconstracker"/></td>
				<td>Duration</td>
				<td>Minutes</td>
			</tr>
			<tr>
				<td><img src={heartrate} className="tableiconstracker"/></td>
				<td>Avg. Heart Rate</td>
				<td>BPM</td>
			</tr>
			<tr>
				<td><img src={facilities} className="tableiconstracker"/></td>
				<td>Facilities</td>
				<td>gym/home/other</td>
			</tr>
			<tr>
				<td><img src={routinetype} className="tableiconstracker"/></td>
				<td>Routine Type</td>
				<td>default/free</td>
			</tr>
		</tbody>
	</table>
</div>
</div>
) : (
	<h1>NO PUEDES ESTAR AQUI</h1>
  )}
</>

    )
}