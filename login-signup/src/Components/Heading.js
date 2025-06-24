import React, { Component } from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { BsPersonPlus } from "react-icons/bs";

export class Heading extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to FUNAAB Portal</h1>
        <p>Access your Admission application</p>
        <div className="sign-up choice">
          <div className="login">
            <FaArrowRightToBracket />
            LogIn
          </div>
          <div className="register">
            <BsPersonPlus />
            Register
          </div>
        </div>
      </div>
    );
  }
}

export default Heading;
