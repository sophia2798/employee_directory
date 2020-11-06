import React from 'react';
import "./Search.css";


function Search(props) {
    return (
        <form>
            <div className="form-group">
                <input
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search for Employee(s)"
                    id="search"
                />
                <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
                    Search
                </button>
                <button onClick={props.handleSeeAll} className="btn btn-primary mt-3">
                    See All Employees
                </button>
            </div>
        </form>
    )
}

export default Search
