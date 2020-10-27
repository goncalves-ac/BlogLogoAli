import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./views/Home";

function Routes() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route path="/" exact component={Home} />
    </BrowserRouter>
  );
}

export default Routes;
