import React from "react";
import Header from "parts/Header";

import DataLanding from "json/landingPage.json";
import Hero from "parts/Hero";

export default function LandingPage(props) {
  return (
    <React.Fragment>
      <Header {...props} />
      <Hero data={DataLanding.hero} />
    </React.Fragment>
  );
}
