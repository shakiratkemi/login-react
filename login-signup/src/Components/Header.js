import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <img src="/funaab.jpeg" alt="Funaab" />
        <h5>Welcome Applicant</h5>
      </div>
    );
  }
}

export default Header;
