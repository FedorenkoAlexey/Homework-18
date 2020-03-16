import React, { Component } from "react";
import { Rating } from "primereact/rating";
import { Button } from "primereact/button";
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
    });
  };

  delUser = id => {
    console.log("Deleted: ", id);
    this.api.deleteUser(id).then(() => this.get());
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
          <h1>You can rate knowledge the students</h1>
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
                  {user.raiting === null ? (
                    <div className="div-apply">
                      <Button
                        icon="pi pi-check"
                        className="btn-apply"
                        onClick={() => this.updateUser()}
                      />
                    </div>
                  ) : (
                    <span></span>
                  )}
                </div>
                <div className="div-btn">
                  <Button
                    label="Delete User"
                    className="p-button-danger"
                    icon="pi pi-times"
                    onClick={() => this.delUser(user._id)}
                  />
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
