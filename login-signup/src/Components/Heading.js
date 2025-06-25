import React, { Component } from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { BsPersonPlus } from "react-icons/bs";

export class Heading extends Component {
  render() {
    return (
      <div>
        <div className="welcome">
          <h2>Welcome to FUNAAB Portal</h2>
          <p>Access your Admission application</p>
        </div>
        <div className="signup-choice">
          <div className="login">
            <FaArrowRightToBracket />
            Login
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
