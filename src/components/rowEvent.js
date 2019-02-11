import React, { Component } from "react";
import {Link} from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

class RowEvent extends Component {
  render() {
    const props = this.props;
    return (
      <div className="sticky row justify-content-center full-width event py-4">
        <div className="col-10">
          <div className="container-center">
            <div className="box-1 d-flex col-6">
              <FontAwesomeIcon className="mr-2 mt-4" size="2x" icon={faCalendarAlt} />
              <p>{"Our next cohort starts on " +props.date}</p>
            </div>
            <div className="box-2">
              <div className="d-flex flex-column">
                <button type="button" className="btn btn-lg btn-1">
                  Apply Now
                </button>
                <Link to="/upcoming-programs" className="col-8 pt-3">or review other dates</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RowEvent;
