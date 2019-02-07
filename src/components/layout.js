import React from "react";
import Footer from "./footer.js";
import NewMenu from "./updatedmenu.js";

export default ({ children }) => 
    <div className="container">
        <NewMenu/>
        <div className="row">
        {children}
        </div>
        <Footer />
    </div>;
