import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <p>
          &copy; 2025 Federal University of Agriculture, Abeokuta designed by
          Sysbeams Limited
        </p>
        <ul className="privacy-lists">
          <li>Privacy</li>
          <li>Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
    );
  }
}

export default Footer;
