import React from "react";
import API from "../utils/API";
import Sort from "./Sort";
import Filter from "./Filter";
import "../styles/style.css";

class User extends React.Component {
    state = {
        users: [],
        states: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"],
        filter: ""
    };

    componentDidMount() {
        this.getUsers();
    };

    getUsers() {
        API.getUsers()
        .then(res => {
            console.log(res)
            this.setState({ users: res.data.results });
        });
    };

    nameSort = () => {
        this.setState({
            users: this.state.users.sort((a,b) => a.name.last.localeCompare(b.name.last))
        });
    };

    stateSort = () => {
        this.setState({
            users: this.state.users.sort((a,b) => a.location.state.localeCompare(b.location.state))
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const filterState = document.querySelector("#filterInput").value;
        const filtered = this.state.users.filter(user => user.location.state === filterState);
        this.setState({
            users: filtered
        });
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Sort 
                            name={this.nameSort}
                            state={this.stateSort}
                        />
                    </div>
                    <div className="col-8">
                    <form>
                        <input
                            id="filterInput"
                            type="text"
                            name="filter"
                            list="states"
                            style={{width: "80%"}}
                            placeholder="See employees from State entered here"
                        />
                        <datalist id="states">
                            {this.state.states.map(state => (
                                <option value={state} key={state}></option>
                            ))}
                        </datalist>
                        <button
                            type="submit"
                            className="btn btn-info"
                            onClick={this.handleFormSubmit}>Filter</button>
                    </form>
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="text-center" scope="col">Picture</th>
                            <th className="text-center hover" scope="col" data-value="name" onClick={this.nameSort}>Name</th>
                            <th className="text-center" scope="col">Email Address</th>
                            <th className="text-center" scope="col">Phone Number</th>
                            <th className="text-center hover" scope="col" data-value="state" onClick={this.stateSort}>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map(user => (
                        <tr key={user.login.uuid}>
                            <td className="d-flex justify-content-center"><img src={user.picture.medium} alt="employee"/></td>
                            <td className="text-center">{user.name.first} {user.name.last}</td>
                            <td className="text-center">{user.email}</td>
                            <td className="text-center">{user.phone}</td>
                            <td className="text-center">{user.location.city}, {user.location.state}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default User;