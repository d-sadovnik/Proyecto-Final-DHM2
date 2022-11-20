import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import background from "./../../img/picfondo2.jpg";
import "../../styles/historytracker.css";

export const Historytracker = () => { 
    return (
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
				<td>Date Icon</td>
				<td>Date</td>
				<td>dd/mm/yy</td>
			</tr>
			<tr>
				<td>Routine description Icon</td>
				<td>Routine Description</td>
				<td>String</td>
			</tr>
			<tr>
				<td>Target muscles icon</td>
				<td>Targeted muscles</td>
				<td>String</td>
			</tr>
			<tr>
				<td>Calories icon</td>
				<td>Calories</td>
				<td>Integer</td>
			</tr>
			<tr>
				<td>Distance icon</td>
				<td>Distance</td>
				<td>KM</td>
			</tr>
			<tr>
				<td>Duration icon</td>
				<td>Duration</td>
				<td>Minutes</td>
			</tr>
			<tr>
				<td>Heart Rate icon</td>
				<td>Avg. Heart Rate</td>
				<td>BPM</td>
			</tr>
			<tr>
				<td>Facilities icon</td>
				<td>Facilities</td>
				<td>gym/home/other</td>
			</tr>
			<tr>
				<td>Routine Type icon</td>
				<td>Routine Type</td>
				<td>default/free</td>
			</tr>
		</tbody>
	</table>
</div>
</div>

    )
}