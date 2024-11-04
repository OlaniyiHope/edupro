import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const pageMetadata = {
  "/": {
    title: "Edu Pro Solution - No 1 School Management System in Nigeria",
    description:
      "Edu Pro Solution offers a comprehensive school management system.",
    image: "URL_TO_YOUR_IMAGE", // Replace with the actual image URL
  },
  "/innovation": {
    title: "Innovating Education with Artificial Intelligence",
    description: "Learn how AI is transforming education.",
    image: "URL_TO_YOUR_IMAGE",
  },
  "/about": {
    title: "About Edu Pro Solution",
    description: "Discover the mission and vision of Edu Pro Solution.",
    image: "URL_TO_YOUR_IMAGE",
  },
  // Add other routes with metadata as necessary
};

const PageTitleSetter = () => {
  const location = useLocation();
  const { title, description, image } =
    pageMetadata[location.pathname] || pageMetadata["/"];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default PageTitleSetter;
