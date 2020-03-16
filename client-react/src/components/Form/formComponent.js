import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import userService from "../../services/userServices";

import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./styles.css";

class FormComponent extends Component {
  api = new userService();
  constructor(props) {
    super(props);
    this.state = {
      formData: []
    };
  }
  componentDidMount() {
    // this.props.get();
  }

  onHandleNameChange = e => {
    let value = e.target.value;
    console.log(value);
    const newState = {
      ...this.state.formData,
      name: value
    };
    let resState = this.setState({ formData: newState });
    return resState;
  };

  onHandleEmailChange = e => {
    let value = e.target.value;
    const newState = {
      ...this.state.formData,
      email: value
    };
    let resState = this.setState({ formData: newState });
    return resState;
  };
  submitUser = () => {
    const data = this.state.formData;
    console.log("STATE", this.state.formData);
    this.api
      .createUser(data)
      .then(() => {
        const newState = {
          ...this.state.formData,
          name: "",
          email: ""
        };
        let resState = this.setState({ formData: newState });
      })
      .then(() => this.props.get());
  };

  render() {
    const { formData, firstName } = this.state;
    return (
      <div className="form">
        Create new user
        <div className="content-section implementation">
          <h3>Floating Label</h3>
          <span className="p-float-label">
            <InputText
              id="float-input"
              type="text"
              size="30"
              name="name"
              value={formData.name}
              onChange={e => this.onHandleNameChange(e)}
            />
            <label htmlFor="float-input">Username</label>
          </span>

          <span className="p-float-label user-email">
            <InputText
              id="float-input-e"
              type="email"
              size="30"
              value={formData.email}
              onChange={e => this.onHandleEmailChange(e)}
            />
            <label htmlFor="float-input-e">e-mail</label>
          </span>
        </div>
        <div className="button">
          <button className="btn-create" onClick={() => this.submitUser()}>
            Create
          </button>
        </div>
      </div>
    );
  }
}

export default FormComponent;
