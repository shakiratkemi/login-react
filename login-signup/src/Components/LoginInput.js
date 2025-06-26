import React, { Component } from "react";
import Heading from "./Heading";
import { FaArrowRightToBracket } from "react-icons/fa6";

export class LoginInput extends Component {
  render() {
    return (
      <div>
        <Heading />

        <div className="form-container">
          <form action="#">
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input type="text" placeholder="Enter your email" />
            </div>

            <div className="input-box">
              <label htmlFor="password">Password</label>
              <input type="password" />
            </div>

            <div className="remember-container">
              <label>
                {" "}
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot password</a>
            </div>

            <button type="submit">
              <FaArrowRightToBracket />
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginInput;
