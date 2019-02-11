import React, { Component } from "react";
import {Link} from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

// <FontAwesomeIcon className="mr-2 mt-4" size="2x" icon={faCalendarAlt} />
// 
// 

class RowEvent extends Component {
  render() {
    const props = this.props;
    return (
      <div className="container-fluid full-width">
        <div className="row p-3 bg bg-secondary">
            <div className="col-9 mx-auto d-flex justify-content-center">
              <div className="mr-4 col-8 d-flex align-items-center">
                <FontAwesomeIcon className="text-light mr-3" size="3x" icon={faCalendarAlt} />
                <p style={{fontSize:"24px"}}className="text-light">{"Our next cohort starts on " +props.date}</p>
              </div>
              <div className="col-4 d-flex flex-column align-items-center">
                <button type="button" className="btn-red-menufixed">
                  Apply Now
                </button>
                <Link to="/upcoming-programs" className="text-light col-12">or review other dates</Link>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default RowEvent;
