import React, { Component } from "react";

import Airbnb from "../img/airbnb.png";

class StudentGraduate extends Component {
  render() {
    const props = this.props;
    return (
      <div className="row justify-content-center full-width student-graduated-4geeks">
        <div className="col-12 title-graduated-4geeks">
          <h2 className="col-12">Over 300 students graduated so far</h2>
          <div className="flex-event">
            <div className="col-3 text-center">
              <img alt="student1" className="img-student" src={Airbnb} />
            </div>
            <div className="col-3 text-center">
              <img alt="student1" className="img-student" src={Airbnb} />
            </div>
            <div className="col-3 text-center">
              <img alt="student1" className="img-student" src={Airbnb} />
            </div>
            <div className="col-3 text-center">
              <img alt="student1" className="img-student" src={Airbnb} />
            </div>
          </div>
          <p className="text-center">
            {props.quote}
          </p>
          <p className="text-center">{props.name}</p>
        </div>
      </div>
    );
  }
}

export default StudentGraduate;
