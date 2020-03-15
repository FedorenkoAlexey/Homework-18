import React, { Component } from "react";
import userService from "../../services/userServices";

class UsersComponent extends Component {
  api = new userService();
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    this.api.getAll().then(res =>
      this.setState({
        users: res
      })
    );
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        USER Component
        <ul>
          {users.map(user => (
            <li key={user.name + 2}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersComponent;
