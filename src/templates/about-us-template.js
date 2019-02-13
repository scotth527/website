import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { StickyContainer, Sticky } from 'react-sticky';
import Banner from "../components/banner.js";
import Facts from "../components/facts.js";
import "../sass/index.scss";
import TrainnerCourse from "../components/course-template/trainnerCourse.js";
import Cornerstones from "../components/cornerStones.js";
import StudentGraduate from "../components/studentGraduate.js";
import FormSubscribe from "../components/formSubscribe.js";
import RowEvent from "../components/rowEvent.js";
import HeaderParagraphs from "../components/headerParagraphs";
import Staff from "../components/staff.js";

export default ({ data }) => {
  const information =[
    {
      header:"2015",
     fact:"founded"
    },
    {
      header:"5",
      fact:"Campuses"
    },
    {
      header:"300+",
      fact:"Graduates"
    },
    {
      header:"100+",
      fact:"Hiring Partners"
    }
  ];
  const parttime = {
    header:"Let's Part-Time",
    paragraphs:{
      p1:"Part-time is far more than just a schedule. Building a unique methodology and constantly updating our content through part-time education has made us more flexible, tech-based and efficient",
      p2:"All of our courses are part-time, in 3-hour classes, 3 times a week."
    }
  };
  const ourStory = {
    header:"Our story...",
    paragraphs: {
      p1:"4Geeks Academy was founded in 2015. What began as an internal project to train new developers has flourished into a full-time passion.",
      p2:"Today, 4Geeks is now based in the U.S. As coding has become an essential part of society, the mission of our Coding Bootcamp is to instill a new framework for Coding Education universally.",
      p3:"4Geeks Academy now offers locations in 3 cities, with 5 campuses, and over 300 graduates.",
    }
  };
  const staff = [
    {
      name:"Marcelo Ricigliano",
      description:"Ok, someone has to be a non-coder.  Although technology is his passion (and Juve, of course), Marcelo is not a software developer (he actually graduated as a Lawyer).  He has been founding Tech-startups since 2010, and, now, together with Alejandro, they are introducing a new framework to the world of coding education: 4Geeks Academy.",
      image:""
    },
    {
      name:"Alejandro Sánchez",
      description:"Ever hear the term “There are no words to describe Genius”?  That defines Alejandro.   He has built the Academic platform, is the one responsible for the syllabus, is an extraordinary Coder, and a dedicated teacher.  When Alejandro is teaching, EVERYONE needs to listen - you are witnessing both the purity of “experience,” and the truest form of “knowledge.",
      image:""
    },
    {
      name:"Jonathan Toledo",
      description:"Jonathan has been around for a long time. He is so engaged with 4Geeks that now has become our country manager in Chile. Jonathan is passionate about many things, but delivering a premium coding education has now his first place.  He is focused on helping people with their dreams of having a life and a career as software developers."
    },
    {
      name:"Jennifer Toledo",
      description:"Jennifer has become a groundstone of 4Geeks. Now in charge of operations and Admissions in Chile, Jenni got in love and is really passionate about the work we have been doing at 4Geeks. She is a strong believer of our vision and our commitment to build strong software developer through our program.",
      image:""
    },
    {
      name:"Giorgio Saturno",
      description:"Giorgio is our recent discovery. In charge of Placement and Partnership in Miami, Giorgio is becoming a must for our students. He will do everything he could in order to help you build a strong profile and improve your chances of getting a great job. Giorgio has been an entrepreneur for years, and he is really passionate about Miami growth and development.",
      image:""
    },
    {
      name:"Yine Mota",
      description:"Communications Developer.  She has taken the Academy as her own.  Yine won't let anyone stand between what we must deliver, and her dedication increases every day.",
      image:""
    },
    {
      name:"Dani Hernández",
      description:"Admissions Developer.  Dani is the doorway to your new life of coding.  She will take care of everything and be at your side throughout the process.  Somehow, someway, Dani is always there!",
      image:""
    },
    {
      name:"Kevin Hernandez",
      description:"The \"money-keeper.\"  Kevin is the one who both organizes and curbs our eager spending habits.  \“Tradition\” and \“loyalty\" defines him, and we are thankful to have him with us.",
      image:""
    },
    {
      name:"Alex Mendez",
      description:"The Academy Designer.  It truly is “tough work” to deal with so many requirements! Always striving for perfection, Alex focuses on delivering the highest possible quality level of products.",
      image:""
    },
    {
      name:"Iván Aranzazu",
      description:"The Operations Head in Venezuela.  An educator by profession, Ivan is there to let us know what needs to be improved.",
      image:""
    },
  
  ];
  return (
    <div>
    <Layout>
            <div className="col-6 mx-auto">
               <Facts info={information}/>
               <Cornerstones />
               <HeaderParagraphs header={ourStory.header} para={ourStory.paragraphs} />
               <a href="https://www.4geeksacademy.co/4geeks-academy-history/">
                  <button type="button" className="btn-red-large">About 4Geeks Academy</button>
               </a>
               <Staff staff={staff}/>
               <HeaderParagraphs header={parttime.header} para={parttime.paragraphs} />
               <StudentGraduate name={""} quote={""} />
               <FormSubscribe />
               
            </div>
    </Layout>
      <RowEvent />
    </div>
  );
};

export const query = graphql`
  query($slug: String) {
    dataYaml(basic_info: { slug: { eq: $slug } }) {
      info
      basic_info {
        slug
      }
    }
  }
`;
