import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { StickyContainer, Sticky } from 'react-sticky';
import Banner from "../components/banner.js";
import Menu from "../components/menu.js";
import Facts from "../components/facts.js";
import "../sass/index.scss";
import TrainnerCourse from "../components/course-template/trainnerCourse.js";
import Cornerstones from "../components/cornerstones.js"

export default ({ data }) => {
  return (
    <Layout>
        <div className="row">
               <Facts />
               <Cornerstones />
        </div>
    
    </Layout>
  );
};

