import React from 'react';
import "./Jumbo.css";

function Jumbo() {
    return (
        <div className="jumbotron jumbotron-fluid" id="jumbotron">
        <div className="container">
            <h1 className="display-4" id="jumbo-header">Employee Directory</h1>
            <hr />
            <p className="lead">Keep track of your employees! Sort them by name or date of birth or search through all the employees by name. You can always revert back to to the complete employee list by clicking on the "See All Employees" button. Email addresses are clickable links that will open an email in your default mail application. Click on an image to see a larger version.</p>
        </div>
        </div>
    )
}

export default Jumbo