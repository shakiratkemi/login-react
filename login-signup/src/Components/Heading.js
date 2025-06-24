import React, { Component } from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";

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
        </div>
      </div>
    );
  }
}

export default Heading;
