import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { StickyContainer, Sticky } from 'react-sticky';
import Banner from "../components/banner.js";
import Menu from "../components/menu.js";
import Facts from "../components/facts.js";
import "../sass/index.scss";
import TrainnerCourse from "../components/course-template/trainnerCourse.js";
import Cornerstones from "../components/cornerstones.js";
import Story from "../components/story.js"
import StudentGraduate from "../components/studentGraduate.js";
import FormSubscribe from "../components/formSubscribe.js"

export default ({ data }) => {

  return (
    <Layout>
            <div className="col-9 mx-auto">
               <Facts />
               <Cornerstones />
               <Story />
               <StudentGraduate />
               <FormSubscribe />
            </div>
    </Layout>
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
