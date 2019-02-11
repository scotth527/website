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
                  <Link className="pl-3 navbar-brand" to="/">
                    <img className="justify-content-center" id="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5k5OBpVGmOPEISGcdwOt5B4g2nmMqcnqNV9OROyVnHfRsmYm88w" 
                    alt="logo"/>
                  </Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="ml-3 col-9 collapse navbar-collapse pt-0" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item dropdown mb-0 pt-0 ml-3 mr-4 ">
                        <a className="nav-link dropdown-toggle programs" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          The programs
                        </a>
                        <div className="dropdown-menu mt-0 pt-0" aria-labelledby="navbarDropdown">
                          <Link className="dropdown-item" to="/parttime">Full Stack Development Bootcamp (Part-time)</Link>
                          <Link className="dropdown-item" to="/fullstack">Full Stack Development Bootcamp (Full-time)</Link>
                          <Link className="dropdown-item" to="/introcoding">Coding Introduction</Link>
                        </div>
                      </li>
                      <li className="nav-item mr-4">
                        <Link to={"/about-us"}>4G Academy</Link>
                      </li>
                      <li className="nav-item mr-4">
                        <Link to={"/partners/"}>Partners</Link>
                      </li>
                      <li className="nav-item mr-4">
                        <Link to={"/upcoming-programs/"}>Upcoming programs</Link>
                      </li>
                    </ul>
                    
                  </div>
                </nav>
                {props.children}
           </div>
        </div>
      </div>
    );
  }
}

export default NewMenu;
