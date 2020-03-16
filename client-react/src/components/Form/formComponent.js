import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
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
      formData: [],
      errBorder: "",
      errBorderMail: "",
      isValid: false
    };
  }
  componentDidMount() {
    // this.props.get();
  }

  onHandleNameChange = e => {
    let value = e.target.value;
    const newState = {
      ...this.state.formData,
      name: value
    };
    let resState = this.setState({ formData: newState });
    return resState;
  };

  onHandleEmailChange = e => {
    let value = e.target.value;
    let emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    emailValid
      ? this.setState({
          errBorderMail: "",
          isValid: true
        })
      : this.setState({
          errBorderMail: " 2px solid red",
          isValid: false
        });
    const newState = {
      ...this.state.formData,
      email: value
    };
    let resState = this.setState({ formData: newState });
    return resState;
  };

  submitUser = () => {
    const data = this.state.formData;
    data.name && data.email
      ? this.api
          .createUser(data)
          .then(() => {
            const newState = {
              ...this.state.formData,
              name: "",
              email: ""
            };
            this.setState({
              formData: newState,
              isValid: false
            });
          })
          .then(() => {
            this.props.get();
          })
      : this.setState({
          errBorder: " 2px solid red",
          errBorderMail: " 2px solid red"
        });
    setTimeout(() => {
      this.setState({
        errBorder: "",
        errBorderMail: ""
      });
    }, 1500);
  };

  render() {
    const { formData } = this.state;
    const errorColor = {
      border: this.state.errBorder
    };
    const errorColorMail = {
      border: this.state.errBorderMail
    };
    return (
      <div className="form">
        <h3>Create new user</h3>
        <div className="content-section implementation">
          <span className="p-float-label">
            <InputText
              style={errorColor}
              id="float-input"
              type="text"
              size="30"
              value={formData.name}
              onChange={e => this.onHandleNameChange(e)}
            />
            <label htmlFor="float-input">Username</label>
          </span>

          <span className="p-float-label user-email">
            <InputText
              style={errorColorMail}
              id="float-input-e"
              type="email"
              size="30"
              value={formData.email}
              onChange={e => this.onHandleEmailChange(e)}
            />
            <label htmlFor="float-input-e">Ex@email.com</label>
          </span>
        </div>
        <div className="button">
          <Button
            label="Create"
            icon="pi pi-user-edit"
            className="p-button-success"
            disabled={!this.state.isValid}
            onClick={() => this.submitUser()}
          />
        </div>
      </div>
    );
  }
}

export default FormComponent;
