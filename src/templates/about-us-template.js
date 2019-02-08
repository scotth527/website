import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { StickyContainer, Sticky } from 'react-sticky';
import Banner from "../components/banner.js";
import Facts from "../components/facts.js";
import "../sass/index.scss";
import TrainnerCourse from "../components/course-template/trainnerCourse.js";
import Cornerstones from "../components/cornerstones.js";
import Story from "../components/story.js"
import StudentGraduate from "../components/studentGraduate.js";
import FormSubscribe from "../components/formSubscribe.js"
import RowEvent from "../components/rowEvent.js";
import HeaderParagraphs from "../components/headerParagraphs";

export default ({ data }) => {
  var parttime = {
    header:"Let's Part-Time",
    paragraphs:{
      p1:"Part-time is far more than just a schedule. Building a unique methodology and constantly updating our content through part-time education has made us more flexible, tech-based and efficient",
      p2:"All of our courses are part-time, in 3-hour classes, 3 times a week."
    }
  };
  return (
    <div>
    <Layout>
            <div className="col-8 mx-auto">
               <Facts />
               <Cornerstones />
               <Story />
               <HeaderParagraphs header={parttime.header} para={parttime.paragraphs} />
               <StudentGraduate />
               <FormSubscribe />
            </div>
    </Layout>
      <RowEvent />
    </div>
  );
};

export const query = graphql`
  query($slug: String) {
    coursesYaml(basic_info: { slug: { eq: $slug } }) {
      info
      basic_info {
        slug
      }
      banner {
        headertext
        title
        time
      }
      description {
        description
        time
        menu {
            title
            detail {
              title
              text
            }
        }
      }
      course_structure{
        menu_structure{
          title
          detail{
            title
          }
        }
      }
      training{
        title
        subtitle
        description{
          trainer
          description
          img{
            childImageSharp {
              fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      skills{
        titleTechnology
        subtitle
        description{
          title
          description
          icon{
            childImageSharp {
              fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      pricing{
        description
        price
        description_price
        extend_plan
        extend_plan_description
        per_month{
          duration
          title_description_extended
          description_extensed
        }
      }
    }
  }
`;
