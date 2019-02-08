import React from "react";
import Footer from "./footer.js";
import NewMenu from "./updatedmenu.js";
import Banner from "./banner.js"

export default ({ children }) => 
    <div className="container">
        <NewMenu/>
        <div className="row">
            {children}
        </div>
        <Footer />
    </div>;
