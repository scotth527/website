import React, { Component } from "react";
import Education from "../img/footerImages/florida.png";
import Bitcoin from "../img/footerImages/bitcoin.png";
import Geekslogo from "../img/footerImages/4geekslogo.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook} from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// <FontAwesomeIcon icon="igloo" />

class Footer extends Component {
  render() {
    return (
      <div className="row full-width justify-content-center footer">
        <div className="col-9 p-0">
          <div className="flex-footer">
            <div className="col-6 description">
              <h3>Contact</h3>
              <ul>
                <li>We are available Monday to Friday: 9:00am - 6:00pm</li>
                <li>Start Hub, 66 W Flager Street, #900 Miami, Fl 33130</li>
                <li>Phone: +1(727)8882491</li>
                <li>info@4GeeksAcademy.com</li>
              </ul>
            </div>
            <div className="col-6 d-flex flex-column">
              <h3>Company</h3>
              <ul>
                <li>We are available Monday to Friday: 9:00am - 6:00pm</li>
                <li>Start Hub, 66 W Flager Street, #900 Miami, Fl 33130</li>
                <li>Phone: +1(727)8882491</li>
                <li>info@4GeeksAcademy.com</li>
              </ul>
              
              
            </div>
            <div className="col-6">
              <h3>Locations</h3>
              <ul>
                <li>Miami, Downtown, USA</li>
                <li>Miami Dade College, USA</li>
                <li>Impact Hub, CCS, Vzla</li>
                <li>El Nacional, CCS, Vzla</li>
                <li>Maracaibo, Vzla</li>
              </ul>
            </div>
            <div className="mt-4 col-12 d-flex">
              <div className="d-flex flex-column mr-3">
                <p>licenced by </p>
                <img src={Education} alt="education department"/>
              </div>
              <div className="d-flex flex-column">
                <p>We accept </p>
                <img style={{width:"140px", height:"40px"}} src={Bitcoin} alt="bitcoin" />
              </div>
               <div className="ml-3 d-flex flex-column">
                <div className="d-flex justify-content-between">
                  <img className="m-0" style={{width:"100px", height:"50px"}} src={Geekslogo} alt="4geekslogo" />
                  <a className="mr-2" href="https://www.instagram.com/4geeksacademy/">
                    <FontAwesomeIcon size="2x" icon={faInstagram} />
                  </a>
                  <a className="mr-2" href="https://twitter.com/4GeeksAcademy">
                    <FontAwesomeIcon size="2x" icon={faTwitter} />
                  </a>
                  <a className="mr-2" href="https://www.facebook.com/4geeksacademy/">
                    <FontAwesomeIcon size="2x" icon={faFacebook} />
                  </a>
                  <a className="mr-2" href="https://www.youtube.com/channel/UC1ZyAx5eyV9gTFWpHPs9-GA">
                    <FontAwesomeIcon size="2x" icon={faYoutube} />
                  </a>
                  <a className="mr-2" href="https://github.com/4geeksacademy">
                    <FontAwesomeIcon size="2x" icon={faGithub} />
                  </a>
                </div>
                <p>Copyright 4Geeks Academy LLC 2017 All rights reserved. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
