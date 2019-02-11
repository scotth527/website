import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { StickyContainer, Sticky } from 'react-sticky';
import Banner from "../components/banner.js";
import "../sass/index.scss";
import FormSubscribe from "../components/formSubscribe.js";
import RowEvent from "../components/rowEvent.js";

export default ({ data }) => {

  return (
    <div>
      <Layout>
              <div className="col-8 mx-auto">
                  Intro to coding
                 <FormSubscribe />
              </div>
      </Layout>
      <RowEvent />
    </div>
  );
};