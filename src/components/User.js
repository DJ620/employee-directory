import React from "react";
import API from "../utils/API";

class User extends React.Component {
    state = {
        users: {}
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers() {
        API.getUsers()
        .then(res => {
            console.log(res);
            this.setState({ users: res.data.results });
        });
    };
    render() {
        return (
            <h1>Hello World</h1>
        )
    }
}

export default User;