import React, { Component } from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import Header from "./header";
import AboutMe from "./about-me";
import Projects from "./projects";
import Footer from "./footer";
import "bulma/css/bulma.css";

class MainContainer extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <Header />
          <AboutMe />
          <Projects />
          <Footer />
          <Route exact path="/" component={Header} />
          <Route path="/about" component={AboutMe} />
          <Route path="/projects" component={Projects} />
        </div>
      </HashRouter>
    );
  }
}

export default MainContainer;
