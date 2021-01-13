import React from "react";
import API from "../utils/API";

class User extends React.Component {
    state = {
        users: []
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

    sortUsers = event => {
        switch (event.currentTarget.attributes.getNamedItem("data-value").value) {
            case "name":
                this.setState({
                    users: this.state.users.sort((a,b) => a.name.last.localeCompare(b.name.last))
                });
                break;
            case "state":
                this.setState({
                    users: this.state.users.sort((a,b) => a.location.state.localeCompare(b.location.state))
                })
            default:
                return;
        };
    };

    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="text-center" scope="col">Picture</th>
                            <th className="text-center" scope="col" data-value="name" onClick={this.sortUsers}>Name</th>
                            <th className="text-center" scope="col">Email Address</th>
                            <th className="text-center" scope="col">Phone Number</th>
                            <th className="text-center" scope="col" data-value="state" onClick={this.sortUsers}>Location</th>
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