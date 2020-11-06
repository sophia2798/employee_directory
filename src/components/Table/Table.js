import React, { Component } from 'react';
import Row from "../Row/Row";
import "./Table.css";
import Search from "../Search/Search";
import Sort from "../Sort Btn/Sort";
import API from "../../utils/API";
import moment from "moment";

class RowContainer extends Component {
    state = {
        employees: [],
        nameSort: true,
        search: ""
    };

    componentDidMount() {
        API.search()
        .then(res => {
            // console.log(res.data.results);
            this.setState({ employees: res.data.results });
        })
        .catch(err => console.log(err))
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    };

    handleSortByFirstName = () => {
        this.setState({ nameSort: true })
        if (this.state.nameSort) {
            const nameSortArr = this.state.employees.sort((a,b) => (a.name.first > b.name.first)?1 : -1);
            this.setState({ employees: nameSortArr });
        }
    };

    handleSortByLastName = () => {
        this.setState({ nameSort: true })
        if (this.state.nameSort) {
            const nameSortArr = this.state.employees.sort((a,b) => (a.name.last > b.name.last)?1 : -1);
            this.setState({ employees: nameSortArr });
        }
    };

    handleSortByDate = () => {
        this.setState({ nameSort: true });
        if (this.state.nameSort) {
            const dateSortArr = this.state.employees.sort((a,b) => {
                return a.dob.date < b.dob.date? -1 : a.dob.date > b.dob.date ? 1 : 0;
            })
            this.setState({ employees: dateSortArr });
        }
    };
    
    render() {
        return (
            <div className="table-container">
            <section className="dropdown_search">
                <Sort handleSortByFirstName={this.handleSortByFirstName} handleSortByLastName={this.handleSortByLastName} handleSortByDate={this.handleSortByDate} />
                <Search />
            </section>
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
                        <Row id={employee.id.value} name={`${employee.name.first} ${employee.name.last}`} email={employee.email} phone={employee.phone} image={employee.picture.thumbnail} dob={moment(employee.dob.date).format('L')}/>
                    )
                })}
                </tbody>
            </table>
            </div>
        )
    }
}

export default RowContainer
