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
                {this.state.users.map(user => (
                    <p>{user.name.first} {user.name.last}</p>
                ))}
            </div>
        )
    }
}

export default User;