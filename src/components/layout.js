import React from "react";
import Footer from "./footer.js";
import NewMenu from "./updatedMenu.js";
import Banner from "./banner.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

export default ({ children }) => 
    <div className="container">
        <NewMenu/>
        <div className="row">
            {children}
        </div>
        <Footer />
    </div>;
