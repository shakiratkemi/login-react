import React from "react";
import { BsPersonPlus } from "react-icons/bs";
import FormHandler from "./FormHandler";

class SignupInput extends FormHandler {
  constructor(props) {
    super({
      initialState: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    });
  }

  render() {
    return (
      <div className="form-container">
        <form action="#" onSubmit={this.handleSubmit}>
          <div className="name-container">
            <div className="input-box">
              <label>First name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter first name"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </div>

            <div className="input-box">
              <label>Last name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter last name"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="input-box">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-box">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-box">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit">
            <BsPersonPlus />
            Create Account
          </button>
        </form>
      </div>
    );
  }
}

export default SignupInput;
