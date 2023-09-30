import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { client } from "./prismic";

import HeadComponent from "./components/HeadComponent";
import Home from "./routes/Home";
import PriceList from "./routes/Prices";

function App() {
  const [document, setDocument] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await client.getSingle("homepage");
      if (response) {
        setDocument(response.data);
      }
    };

    fetchData();
  }, []);

  if (!document) return null;

  const { description, favicon, website_title } = document;

  return (
    <Router>
      <HeadComponent
        favicon={favicon}
        website_title={website_title}
        description={description}
      />

      {/* Routes */}
      <Routes>
        <Route path="/" exact element={<Home document={document} />} />
        <Route path="/price" element={<PriceList document={document} />} />
      </Routes>
    </Router>
  );
}

export default App;
