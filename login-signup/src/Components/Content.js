import React, { Component } from "react";
import Heading from "./Heading";
import Policy from "./Policy";
import SignupInput from "./SignupInput";
import LoginInput from "./LoginInput";

export class Content extends Component {
  render() {
    return (
      <div className="content-container">
        <Heading />
        <SignupInput />
        <LoginInput />
        <Policy />
      </div>
    );
  }
}

export default Content;
