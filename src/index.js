import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./App";

import { PrismicProvider } from "@prismicio/react";
import { client } from "./prismic";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <PrismicProvider client={client}>
        <App />
      </PrismicProvider>
    </HelmetProvider>
  </React.StrictMode>
);
