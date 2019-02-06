import React from "react";
import Footer from "./footer.js";

export default ({ children }) => 
    <div className="container">
        {children}
        <Footer />
    </div>;
