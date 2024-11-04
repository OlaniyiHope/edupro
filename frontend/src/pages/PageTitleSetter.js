import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const pageTitleMap = {
  "/": "Edu Pro Solution - No 1 School Management System in Nigeria",
  "/innovation": "Innovating Education with Artificial Intelligence",
  // Add more routes as necessary
};

const PageTitleSetter = () => {
  const location = useLocation();
  const pageTitle =
    pageTitleMap[location.pathname] ||
    "Edu Pro Solution - No 1 School Management System in Nigeria";

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta
        name="description"
        content="Edu Pro Solution offers a comprehensive school management system with features like online exams, report cards, school fees payment, and more."
      />
      <meta property="og:title" content={pageTitle} />
      <meta
        property="og:description"
        content="Edu Pro Solution offers a comprehensive school management system with features like online exams, report cards, school fees payment, and more."
      />
      <meta property="og:image" content="URL to your image" />
      <meta property="og:url" content={window.location.href} />
    </Helmet>
  );
};

export default PageTitleSetter;
