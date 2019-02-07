import React, { Component } from "react";
import { Link } from "gatsby";

class NewMenu extends Component {
  render() {
    const props = this.props;
    return (
      <div className="container-fluid"> 
        <div className="row">
           <div className="col-12 mx-auto">
                <nav className="navbar navbar-expand-lg mt-5 justify-content-around" >
                  <Link className="navbar-brand mr-5" to="/">
                    <img id="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5k5OBpVGmOPEISGcdwOt5B4g2nmMqcnqNV9OROyVnHfRsmYm88w" 
                    alt="logo"/>
                  </Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="col-10 collapse navbar-collapse pt-0" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item dropdown col-3 pt-0 ml-3 ">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          The programs
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <Link className="dropdown-item" to="/">Full Stack Development Bootcamp (Part-time)</Link>
                          <Link className="dropdown-item" to="/">Full Stack Development Bootcamp (Full-time)</Link>
                          <Link className="dropdown-item" to="/">Coding Introduction</Link>
                        </div>
                      </li>
                      <li className="nav-item col-3">
                        <Link to={"/about-us"}>4G Academy</Link>
                      </li>
                      <li className="nav-item col-3 ">
                        <Link to={"/partners/"}>Partners</Link>
                      </li>
                      <li className="nav-item col-3">
                        <Link to={"/upcoming-programs/"}>Upcoming programs</Link>
                      </li>
                    </ul>
                    
                  </div>
                </nav>
           </div>
        </div>
      </div>
    );
  }
}

export default NewMenu;
