import React from "react";
import Layout from "../components/layout";
import Facts from "../components/facts";
import FormSubscribe from "../components/formSubscribe";
import RowEvent from "../components/rowEvent";
import HeaderParagraphs from "../components/headerParagraphs.js";

export default () => {
  let partners = {
    headers:"Some of our Partners",
    paragraphs: {
      p:"To assure that our students are getting hired, we work closely with both our hiring partners as well as industry leaders constantly refreshing and optimizing our program and syllabus."
    }
  }
  let immersed = {
    headers: "Immmersed in Miami's Coding Ecosystem",
    paragraphs: {
      paragraphs:"We actively organize and participate in Miami's biggest coding initiatives."
    }
  }
  let partnership = {
    headers:"In Partnership with the City's Biggest Influencers",
    paragraphs: {
      p:"Working together to make Miami the Tech-Hub it deserves to be."
    }
  }
  return (
    <Layout>
      <Facts />
      <div>
        <HeaderParagraphs header={partners.headers} para={partners.paragraphs} />
        <button className="btn-red-menufixed">Become a hiring partner</button>
      </div>
      <div> 
        <HeaderParagraphs header={immersed.headers} para={immersed.paragraphs} />
      </div>
      <HeaderParagraphs header={partnership.headers} para={partnership.paragraphs} />
      <FormSubscribe />
      <RowEvent date="December 3,2018"/>
    </Layout>
  );
};