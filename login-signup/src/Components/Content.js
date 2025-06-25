import React, { Component } from "react";
import Heading from "./Heading";
import Form from "./Form";
import Policy from "./Policy";

export class Content extends Component {
  render() {
    return (
      <div className="content-container">
        <Heading />
        <Form />
        <Policy />

      </div>
    );
  }
}

export default Content;
