import axios from 'axios';
import React from "react";



const DisplayFeast = (props) => {

    console.log(props.parentFeast);

    return(
        <table className='table' charttype='table'>
        <thead>
            <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Date</th>
                <th scope='col'>Address</th>
                <th scope='col'>Time</th>
                <th scope='col'>Info</th>

            </tr>
        </thead>
        <tbody>
            {props.parentFeast.map((feast) => {
                return(
                <tr>
                <td>{feast.name}</td>
                <td>{feast.date}</td>
                <td>{feast.address}</td>
                <td>{feast.time}</td>
                <td>{feast.info}</td>
                </tr>
                )
                })}
            </tbody>
        </table>
);
}
export default DisplayFeast