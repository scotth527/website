import React from "react";
import Layout from "../components/layout";
import Facts from "../components/facts";
import FormSubscribe from "../components/formSubscribe";
import RowEvent from "../components/rowEvent";
import HeaderParagraphs from "../components/headerParagraphs.js";
import Partners from "../components/partners.js";


export default () => {
  const moreFacts = [
    {
      header:"290",
     fact:"Employers"
    },
    {
      header:"312",
      fact:"Graduates"
    },
    {
      header:"91%",
      fact:"Hiring Rate"
    },
    {
      header:"70 days",
      fact:"Avg Hiring Period"
    }
  ];
  const partners = {
    headers:"Some of our Partners",
    paragraphs: {
      p:"To assure that our students are getting hired, we work closely with both our hiring partners as well as industry leaders constantly refreshing and optimizing our program and syllabus."
    }
  };
  const partnerImages = [ "Boats",
        "Gaisce",
        "LaunchPotato",
        "Tcg", "Razz","Affinity",
        "Bod",
        "Digitel",
        "Coinet",
        "Overseas","DS9"];
  const initiatives = [
        "Blockchain",
        "Blocktech",
        "MiamiPython",
        "Shellhack",
        "Startupweekend",
        "Wordcamp"];
  const influencers = [
        "Beacon",
        "Bridges",
        "CareerScore",
        "MDC",
        "MiamiDDA",
        "Quotanda",
        "Skillsfund"
    ];
  const immersed = {
    headers: "Immmersed in Miami's Coding Ecosystem",
    paragraphs: {
      paragraphs:"We actively organize and participate in Miami's biggest coding initiatives."
    }
  };
  const partnership = {
    headers:"In Partnership with the City's Biggest Influencers",
    paragraphs: {
      p:"Working together to make Miami the Tech-Hub it deserves to be."
    }
  };
  return (
    <Layout>
      <div className="row">
        <div className="col-7 mx-auto">
          <Facts info={moreFacts}/>
          <div>
            <HeaderParagraphs header={partners.headers} para={partners.paragraphs} />
            <Partners partner={partnerImages} />
            <button className="btn-red-menufixed">Become a hiring partner</button>
          </div>
          <div> 
            <HeaderParagraphs header={immersed.headers} para={immersed.paragraphs} />
            <Partners partner={initiatives} />
          </div>
          <HeaderParagraphs header={partnership.headers} para={partnership.paragraphs} />
          <Partners partner={influencers} />
          <FormSubscribe />
          <div className="row">
        <div className="mx-auto col-12">
          <RowEvent date="December 3,2018"/>
        </div>
      </div>
        </div>
      </div>
      
    </Layout>
  );
};