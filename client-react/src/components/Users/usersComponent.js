import React, { Component } from "react";
import { Rating } from "primereact/rating";
import userService from "../../services/userServices";

import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

class UsersComponent extends Component {
  api = new userService();
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      transferData: []
    };
  }
  componentDidMount() {
    // this.api.getAll().then(res =>
    //   this.setState({
    //     users: res
    //   })
    // );
    this.get();
  }
  get = () => {
    this.api.getAll().then(res => {
      this.setState({
        users: res
      });
      console.log(res);
    });
  };

  delUser = id => {
    console.log("Deleted: ", id);
    this.api
      .deleteUser(id)
      .then(res => console.log("Deleted: ", res))
      .then(() => this.get());
  };

  transferData = (e, id) => {
    const newState = {
      ...this.state.transferData,
      _id: id,
      raiting: e.value,
      isReadOnly: true
    };
    let resState = this.setState({ transferData: newState });
    return resState;
  };

  updateUser = () => {
    const data = this.state.transferData;
    this.api.updateUser(data);
  };

  render() {
    const { users } = this.state;
    return (
      <div>
        USER Component
        <ul>
          {users.map(user => (
            <li key={user.name + 2}>
              {user.name}
              <button onClick={() => this.delUser(user._id)}>Delete</button>
              <br></br>
              <Rating
                value={user.raiting}
                cancel={user.cancel}
                disabled={user.isReadOnly}
                stars={10}
                onChange={event => this.transferData(event, user._id)}
              />
              <button onClick={() => this.updateUser()}>Apply</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersComponent;
