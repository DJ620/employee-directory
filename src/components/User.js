import React from "react";
import API from "../utils/API";
import UserInfo from "./UserInfo";

class User extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers() {
        API.getUsers()
        .then(res => {
            console.log(res)
            this.setState({ users: res.data.results });
        });
    };
    render() {
        console.log(this.state.users);
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="text-center" scope="col">Picture</th>
                            <th className="text-center" scope="col">Name</th>
                            <th className="text-center" scope="col">Email Address</th>
                            <th className="text-center" scope="col">Phone Number</th>
                            <th className="text-center" scope="col">Location</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map(user => (
                        <tr>
                            <td className="d-flex justify-content-center"><img src={user.picture.medium}/></td>
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