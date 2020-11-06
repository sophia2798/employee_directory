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
        filtered: [],
        nameSort: true,
        search: ""
    };

    componentDidMount() {
        API.search()
        .then(res => {
            // console.log(res.data.results);
            this.setState({
                employees: res.data.results,
                filtered: res.data.results
            });
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
            this.setState({ filtered: nameSortArr });
        }
    };

    handleSortByLastName = () => {
        this.setState({ nameSort: true })
        if (this.state.nameSort) {
            const nameSortArr = this.state.employees.sort((a,b) => (a.name.last > b.name.last)?1 : -1);
            this.setState({ filtered: nameSortArr });
        }
    };

    handleSortByDate = () => {
        this.setState({ nameSort: true });
        if (this.state.nameSort) {
            const dateSortArr = this.state.employees.sort((a,b) => {
                return a.dob.date < b.dob.date? -1 : a.dob.date > b.dob.date ? 1 : 0;
            })
            this.setState({ filtered: dateSortArr });
        }
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const inputVal = this.state.search;
        const filterArr = this.state.employees.filter(employee => employee.name.first.includes(inputVal) || employee.name.last.includes(inputVal));
        this.setState({
            filtered: filterArr,
            search: ""
        });
    };

    handleSeeAll = event => {
        event.preventDefault();
        this.setState({
            filtered: this.state.employees,
            search: ""
        });
    };
    
    render() {
        return (
            <div className="table-container">
            <div className="fade-div"></div>
            <section className="dropdown_search">
                <Search 
                handleInputChange = {this.handleInputChange}
                search = {this.state.search}
                handleFormSubmit = {this.handleFormSubmit}
                />
                <Sort handleSortByFirstName={this.handleSortByFirstName}
                handleSortByLastName={this.handleSortByLastName}
                handleSortByDate={this.handleSortByDate}
                handleSeeAll = {this.handleSeeAll}
                />
            </section>
            <table>
                <thead>
                <tr>
                    <th style={{padding: "0 0.7rem"}}>Image</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
                </thead>
                <tbody>
                {this.state.filtered.map(employee => {
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
