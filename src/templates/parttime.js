import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { StickyContainer, Sticky } from 'react-sticky';
import Banner from "../components/banner.js";
import "../sass/index.scss";

export default ({ data }) => {

  return (
    <div>
    <Layout>
            <div className="col-8 mx-auto">
                Part time page
               <FormSubscribe />
            </div>
    </Layout>
      <RowEvent />
    </div>
  );
};