import React, { Component } from "react";

import Background from "../img/night.jpg";
import Sky from "../img/sky.jpeg";

export default class Banner extends Component {
  
  render() {
    console.log(Background);
    return (
      <div
        className="col-md-12 banner-page border border-warning"
        style={{
          background: `blue`,
          height: `80vh`,
          backgroundSize: `cover`
        }}
      >
        <div className="titles">
          <div>
            <h3>{this.props.headerText}</h3>
            <h1>{this.props.title}</h1>
            <h2>{this.props.time}</h2>
            <p className="w-75">{this.props.description}</p>
            <div className="pt-4">
              <button type="button" className="btn btn-lg btn-1">
                {this.props.textBtnLeft}
              </button>
              <button type="button" className="btn btn-lg btn-2">
                {this.props.textBtnRight}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
