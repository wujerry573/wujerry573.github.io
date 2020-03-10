import React, { Component } from "react";
import Header from "./header";
import AboutMe from "./about-me";
import Projects from "./projects";
import Footer from "./footer";
import "bulma/css/bulma.css";

class MainContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        <AboutMe />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default MainContainer;
