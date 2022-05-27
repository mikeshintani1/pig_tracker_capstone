import axios from 'axios';
import React from "react";

const CommentTable = (props) => {

    console.log(props.parentComments);

    return(
        <table className='table' charttype='table'>
        <thead>
            <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Location</th>
                <th scope='col'>Comment</th>

            </tr>
        </thead>
        <tbody>
            {props.parentComments.map((comment) => {
                return(
                <tr>
                <td>{comment.name}</td>
                <td>{comment.location}</td>
                <td>{comment.text}</td>
                </tr>
                )
                })}
            </tbody>
        </table>
);
}
export default CommentTable