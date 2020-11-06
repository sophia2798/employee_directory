import React, { Component } from 'react';
import Row from "../Row/Row";
import "./Table.css";
import API from "../../utils/API";
import moment from "moment";

class RowContainer extends Component {
    state = {
        employees: []
    }

    componentDidMount() {
        API.search()
        .then(res => {
            // console.log(res.data.results);
            this.setState({ employees: res.data.results });
        })
        .catch(err => console.log(err))
    };
    
    render() {
        return (
            <div>
            <table>
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
                </thead>
                <tbody>
                {this.state.employees.map(employee => {
                    return (
                        <Row id={employee.id.value} name={`${employee.name.first} ${employee.name.last}`} email={employee.email} phone={employee.phone} image={employee.picture.thumbnail} dob={moment(employee.dob.date).format('MMM Do YYYY')}/>
                    )
                })}
                </tbody>
            </table>
            </div>
        )
    }
}

export default RowContainer
