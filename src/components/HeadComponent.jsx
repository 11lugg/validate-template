import React from "react";
import { Helmet } from "react-helmet-async";

function HeadComponent({ favicon, website_title, description }) {
  return (
    <Helmet>
      <link rel="icon" href={favicon.url} />
      <link rel="apple-touch-icon" href={favicon.url} />
      <title>{website_title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

export default HeadComponent;
