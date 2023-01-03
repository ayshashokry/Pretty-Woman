//Libraries
import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    return (
      <div className="page-footer pt-1">
        <div className="footer-copyright text-center py-2">
          Copyright© Pretty Woman {new Date().getFullYear()}
        </div>
      </div>
    );
  }
}
