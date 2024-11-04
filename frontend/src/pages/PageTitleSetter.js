// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const pageTitleMap = {
//   "/": "Divine Health Care - Natural Solution for Wellness Essentials",
//   "/product/arthritis-and-stroke":
//     "Divine Health Care Treatment for Arthritis and Stroke",
//   "/product/ulcer": "Divine Health Care Treatment for Ulcer",
//   "/product/diabetes": "Divine Health Care Treatment for Diabetes",
//   "/product/fertility-booster":
//     "Divine Health Care Treatment for Fertility Booster",
//   "/product/hiv-cancer-hepatitis":
//     "Divine Health Care Treatment for HIV, Cancer, Hepatitis, Kidney",
//   "/product/fibroid": "Divine Health Care Treatment for Fibroid/Cyst",
//   "/product/Hbp": "Divine Health Care Treatment for High Blood Pressure (Hbp)",
//   "/pricing": "Pricing",
//   "/shop": "Shop",
//   "/blog": "Blog",
//   "/contact": "Contact Us",
// };

// const PageTitleSetter = () => {
//   const location = useLocation();

//   useEffect(() => {
//     const pageTitle = pageTitleMap[location.pathname] || "Divine Health Care";
//     document.title = pageTitle;
//   }, [location.pathname]);

//   return null;
// };

// export default PageTitleSetter;
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const pageTitleMap = {
  // "/": "Divine Health Care - Natural Solution for Wellness Essentials",

  "/innovation": "Innovating Education with Artificial Intelligence",
};

const PageTitleSetter = () => {
  const location = useLocation();
  const pageTitle =
    pageTitleMap[location.pathname] ||
    "Edu Pro Solution - No 1 School Management System in Nigeria";

  return (
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>
  );
};

export default PageTitleSetter;
