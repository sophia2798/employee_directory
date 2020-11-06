import React, { Component } from 'react';
import Row from "../Row/Row";
import "./Table.css";
import API from "../../utils/API";
import moment from "moment";

class RowContainer extends Component {
    state = {
        employees: [],
        nameSort: false
    };

    componentDidMount() {
        API.search()
        .then(res => {
            // console.log(res.data.results);
            this.setState({ employees: res.data.results });
        })
        .catch(err => console.log(err))
    };

    handleSortByName = () => {
        this.setState({ nameSort: !this.state.nameSort })
        if (this.state.nameSort) {
            const nameSortArr = this.state.employees.sort((a,b) => (a.name.first > b.name.first)?1 : -1);
            this.setState({ employees: nameSortArr });
        } else {
            function shuffle(arr) {
                for (var i=0; i<arr.length; i++) {
                    const rand = Math.floor(Math.random() * (i+1));
                    const el = arr[i];
                    arr[i] = arr[rand];
                    arr[rand] = el;
                }
                return arr;
            }
            this.setState({ employees: shuffle(this.state.employees) });
        }
    };
    
    render() {
        return (
            <div>
            <table>
                <thead>
                <tr>
                    <th>Image</th>
                    <th className="dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Name
                    </th>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item">Link</a>
                    </div>
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
