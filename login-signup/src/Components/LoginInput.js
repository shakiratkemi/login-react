import React from "react";
import FormHandler from "./FormHandler";
import { FaArrowRightToBracket } from "react-icons/fa6";

class LoginInput extends FormHandler {
  constructor(props) {
    super({
      initialState: {
        email: "",
        password: "",
      },
    });
  }
  render() {
    return (
      <div>
        <div className="form-container">
          <form action="#" onSubmit={this.handleSubmit}>
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
