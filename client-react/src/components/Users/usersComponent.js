import React, { Component } from "react";
import { Rating } from "primereact/rating";
import userService from "../../services/userServices";
import FormComponent from "../Form/formComponent";

import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./styles.css";

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
    this.get();
  }

  test = () => {
    console.log("TEST");
  };
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
      isCancel: false,
      isReadOnly: true
    };
    let resState = this.setState({ transferData: newState });
    return resState;
  };

  updateUser = () => {
    const data = this.state.transferData;
    // console.log("DATA", data);
    this.api.updateUser(data).then(() => this.get());
  };

  render() {
    const { users } = this.state;
    return (
      <div className="wrapper">
        <div className="users">
          <ul className="user-list">
            {users.map(user => (
              <li className="user-field" key={user.name + 2}>
                {/* <div> */}
                <span className="username">{user.name}</span>
                <span className="useremail">{user.email}</span>
                <div className="raiting">
                  <Rating
                    value={
                      user.raiting === null
                        ? this.state[`tmpValue${user._id}`]
                        : user.raiting
                    }
                    cancel={user.isCancel}
                    disabled={user.isReadOnly}
                    stars={10}
                    onChange={event => {
                      this.transferData(event, user._id);
                      this.setState({ [`tmpValue${user._id}`]: event.value });
                    }}
                  />
                  <button
                    className="btn-apply"
                    onClick={() => this.updateUser()}
                  >
                    Apply
                  </button>
                </div>
                <div>
                  <button
                    className="btn-del"
                    onClick={() => this.delUser(user._id)}
                  >
                    Delete User
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <FormComponent get={() => this.get()} />
      </div>
    );
  }
}

export default UsersComponent;
