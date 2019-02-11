import React, { Component } from "react";

class UpcomingCourses extends Component {
  render() {
    const props = this.props;
    return (
      <div className="col-12 text-center d-flex">
        <div className="d-flex flex-column">
            <div>{this.props.date}</div>
            <div>{"Duration: " + this.props.duration}</div>
        </div>
        <div className="d-flex flex-column">
            <div>{this.props.city}</div>
            <div>{this.props.country}</div>
        </div>
      </div>
    );
  }
}

export default UpcomingCourses;