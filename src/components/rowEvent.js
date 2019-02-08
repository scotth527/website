import React, { Component } from "react";
import {Link} from "gatsby";

class RowEvent extends Component {
  render() {
    const props = this.props;
    return (
      <div className="sticky row justify-content-center full-width event py-4">
        <div className="col-9">
          <div className="container-center">
            <div className="box-1">
              <p>{"Our next cohort starts on " +props.date}</p>
            </div>
            <div className="box-2">
              <div>
                <button type="button" className="btn btn-lg btn-1">
                  Apply Now
                </button>
                <Link to="/upcoming-programs" className="pt-3 text-center">or review other dates</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RowEvent;
