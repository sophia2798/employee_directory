import React from 'react';
import "./Row.css";

function Row(props) {
    return (
        <tr key={props.id} className="row-tr">
            <td>
                <img src={props.image} alt={props.name} className="id-pic"/>
            </td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
        </tr>
    )
};

export default Row