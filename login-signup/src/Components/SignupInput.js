import React, { Component } from "react";
import Heading from "./Heading";
import { BsPersonPlus } from "react-icons/bs";

export class SignupInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  render() {
    return (
      <div className="form-container">
        <form action="#">
          <div className="name-container">
            <div className="input-box">
              <label htmlFor="firstName">First name</label>
              <input type="text" placeholder="Enter first name" />
            </div>
            <div className="input-box">
              <label htmlFor="lastName">Last name</label>
              <input type="text" placeholder="Enter last name" />
            </div>
          </div>

          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Enter your email" />
          </div>

          <div className="input-box">
            <label htmlFor="password">Password</label>
            <input type="password" />
          </div>

          <div className="input-box">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" />
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
