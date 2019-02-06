import React, { Component } from "react";

class Facts extends Component {
  render() {
    const props = this.props;
    return (
        <div className="col-4 mx-auto mt-5 mb-5">
            <div className="d-flex border border-left-0 border-right-0">
                <h1 className="mt-2 col-6 text-warning">2015</h1>
                <span className="mt-4 text-light"> Founded </span>
            </div>
            <div className="d-flex border border-left-0 border-right-0">
                <h1 className="mt-2 col-6 text-warning">5</h1>
                <span className="mt-4 text-light"> Campuses</span>
            </div>
            <div className="d-flex border border-left-0 border-right-0">
                <h1 className="mt-2 col-6 text-warning">300+</h1> 
                <span className="mt-4 text-light">Graduates</span>
            </div>
            <div className=" d-flex border border-left-0 border-right-0">
                <h1 className="mt-2 col-6 text-warning">100+</h1> 
                <span className="mt-4 text-light">Hiring Partners</span>
            </div>
        </div>
    );
  }
}

export default Facts;