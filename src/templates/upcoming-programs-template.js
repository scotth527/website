import React from "react";
import Layout from "../components/layout";
import NewMenu from "../components/updatedmenu.js";
import FormSubscribe from "../components/formSubscribe";
import CourseDropDown from "../components/coursedropdownrow";

export default () => {
  return (
    <Layout>
      <CourseDropDown />
      <FormSubscribe />
    </Layout>
  );
};
