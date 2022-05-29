import axios from 'axios';
import React from "react";

const SightingTable = (props) => {

    console.log(props.parentSighting);

    return(
        <table className='table' charttype='table'>
        <thead>
            <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Category</th>
                <th scope='col'>Quantity</th>
                <th scope='col'>Location</th>
                <th scope='col'>Time</th>
                <th scope='col'>Date</th>
                <th scope='col'>Sighting Info!</th>
            </tr>
        </thead>
        <tbody>
            {props.parentSighting.map((sighting) => {
                return(
                <tr>
                <td >{sighting.name}</td>
                <td>{sighting.category}</td>
                <td >{sighting.sighting_id}</td>
                <td>{sighting.location}</td>
                <td>{sighting.time}</td>
                <td>{sighting.date}</td>
                <td>{sighting.text}</td>
                </tr>
                )
                })}
            </tbody>
        </table>
);
}
export default SightingTable