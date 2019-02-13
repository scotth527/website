import React, { Component } from "react";

import BlockTech from "../img/event/blocktech.png";

class StudentGraduate extends Component {
  constructor(props) {
		super(props);
		this.state = {
			student:"",
			quote:""
		};
	}
  render() {
    const props = this.props;
    return (
      <div className="row justify-content-center full-width student-graduated-4geeks">
        <div className="col-12 title-graduated-4geeks">
          <h2 className="col-12">Over 300 students graduated so far</h2>
          <div className="flex-event">
            <div className="col-3 text-center">
              <img alt="student1" className="img-student" src={BlockTech} />
            </div>
            <div className="col-3 text-center">
              <img alt="student1" className="img-student" src={BlockTech} />
            </div>
            <div className="col-3 text-center">
              <img alt="student1" className="img-student" src={BlockTech} />
            </div>
            <div className="col-3 text-center">
              <img alt="student1" className="img-student" src={BlockTech} />
            </div>
          </div>
          <p className="text-center">
            {this.state.student}
          </p>
          <p className="text-center">{this.state.quote}</p>
        </div>
      </div>
    );
  }
}

export default StudentGraduate;
