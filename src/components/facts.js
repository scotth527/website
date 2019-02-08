import React, { Component } from "react";

class Facts extends Component {
  render() {
    const props = this.props;
    return (
        
            <div className="col-8 mr-auto pl-0 mt-5 mb-5 justify-content-start">
                <div className="d-flex mx-auto border border-left-0 border-right-0">
                    <span className="col-6 mt-1 facts">2015</span>
                    <span className="col-6 mt-4 text-light noun"> Founded </span>
                </div>
                <div className="d-flex mx-auto border border-left-0 border-right-0">
                    <span className="col-6 mt-1 facts">5</span>
                    <span className="col-6 mt-4 text-light noun"> Campuses</span>
                </div>
                <div className="d-flex mx-auto border border-left-0 border-right-0">
                    <span className="col-6 mt-1 col-4 facts">300+</span> 
                    <span className="col-6 mt-4 text-light noun">Graduates</span>
                </div>
                <div className=" d-flex mx-auto border border-left-0 border-right-0">
                    <span className="col-6 mt-1 col-4 facts">100+</span> 
                    <span className="col-6 mt-4 text-light noun">Hiring Partners</span>
                </div>
            
        </div>
    );
  }
}

export default Facts;