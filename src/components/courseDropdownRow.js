import React, { Component } from "react";
import {Link} from "gatsby";

class CourseDropDown extends Component {
  render() {
    const props = this.props;
    return (
        <div className="row">
            <div className="full-width bg bg-secondary"> 
                <div className="d-flex justify-content-center">
                    <div class="btn-group">
                        <button type="button" class="" >Action</button>
                        <button type="button" class="dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="sr-only">Discover courses</span>
                        </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">events</a>
                        <a class="dropdown-item" href="#">courses</a>
                        <a class="dropdown-item" href="#">workshops</a>
                      </div>
                    </div>
                    
                    <div class="btn-group dropright">
                        <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        In all languages
                        </button>
                    <div class="dropdown-menu">
                        <Link className="dropdown-item" to="/">in english</Link>
                        <Link className="dropdown-item" to="/">en espagñol</Link>
                    </div>
                    </div>
    
                </div>
            </div>
        </div>
    );
  }
}

export default CourseDropDown;
