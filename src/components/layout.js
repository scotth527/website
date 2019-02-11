import React from "react";
import Footer from "./footer.js";
import NewMenu from "./updatedMenu.js";
import Banner from "./banner.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

export default ({ children }) => 
    <div className="container-fluid">
        <NewMenu>
            <Banner
              title="&#60;Time to Code&#62;"
              subtitle="Learn coding skills that change you life"
              description="Learn to code and join than 500 graduates already working as coders. Get career support for life and a become a part of one of the biggest communities in the world"
              headerText="4Geeks Academy Miami Coding"
              textBtnLeft="Apply Now"
              linkBtnLeft=""
              textBtnRight="Request Syllabus"
              linkBtnRight=""
            />
        </NewMenu>
        <div className="row">
            {children}
        </div>
        <Footer />
    </div>;
