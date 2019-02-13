import React from "react";
import Layout from "../components/layout";
import FormSubscribe from "../components/formSubscribe";
import CourseDropDown from "../components/courseDropdownRow";
import HeaderParagraphs from "../components/headerParagraphs";
import UpcomingCourses from "../components/upcomingCourses";

export default () => {
  const upcoming = [
    {
      date:"21 Jan, 2019",
      duration:"304 hrs (16 wks)/ English",
      city:"Miami",
      country:"Downtown, USA"
    },
    {
      date:"21 Jan, 2019",
      duration:"304 hrs (16 wks)/ English",
      city:"Miami",
      country:"Downtown, USA"
    },
    {
      date:"21 Jan, 2019",
      duration:"304 hrs (16 wks)/ English",
      city:"Miami",
      country:"Downtown, USA"
    },
    {
      date:"21 Jan, 2019",
      duration:"304 hrs (16 wks)/ English",
      city:"Miami",
      country:"Downtown, USA"
    }
    ];
  const Fulltime = {
    header:"Full Stack Developement Bootcamp (Full-time)",
    paragraphs: {
      p: "A Premium Program designed to launch your career as a developer. Learn the fundamentals of coding and build applications using HTML5, CSS3, React.js and Python. Integrate your applications(s) with other platforms and create your own API.",
      p2: "This course offers a dedicated career support team as well as: one-on-one coaching with our Senior mentors; networking opportunities; and introductions to potential employers."
    }
  };
  return (
    <Layout>
      <div className="col-6 mx-auto">
        <CourseDropDown />
        <HeaderParagraphs header={Fulltime.header} para={Fulltime.paragraphs} />
        <UpcomingCourses upcoming={upcoming} />
        <FormSubscribe />
      </div>
    </Layout>
  );
};
