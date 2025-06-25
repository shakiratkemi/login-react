import React, { Component } from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";

export class Form extends Component {
  render() {
    return (
      <div className="form-container">
        <form action="#">
          <div className="name-container">
            <div className="input-box">
              <label for="first">First name</label>
              <input type="text" placeholder="Enter first name" />
            </div>
            <div className="input-box">
              <label for="first">Last name</label>
              <input type="text" placeholder="Enter last name" />
            </div>
          </div>

          <div className="input-box">
            <label for="first">Email</label>
            <input type="text" placeholder="Enter your email" />
          </div>
          <div className="input-box">
            <label for="first">Password</label>
            <input type="password" />
          </div>
          <div className="input-box">
            <label for="first">Confirm Password</label>
            <input type="password" />
          </div>

          <button type="submit">
             <FaArrowRightToBracket />
             Create Account
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
