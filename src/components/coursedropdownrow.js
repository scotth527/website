import React, { Component } from "react";
import {Link} from "gatsby";

class CourseDropDown extends Component {
  render() {
    const props = this.props;
    return (
        <div className=".full-width bg bg-secondary"> 
            <div>
                <div class="btn-group dropright">
                    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Discover courses
                    </button>
                <div class="dropdown-menu">
                    <Link className="dropdown-item" to="/">events</Link>
                    <Link className="dropdown-item" to="/">courses</Link>
                    <Link className="dropdown-item" to="/">workshops</Link>
                </div>
                </div>
                
                <div class="btn-group dropright">
                    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    In all languages
                    </button>
                <div class="dropdown-menu">
                    <Link className="dropdown-item" to="/">in english</Link>
                    <Link className="dropdown-item" to="/">en espagñol</Link>
                </div>
                </div>

            </div>
        </div>
    );
  }
}

export default CourseDropDown;
