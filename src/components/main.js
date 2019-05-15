import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import AboutMe from "./aboutme";
import ContactMe from "./contact";
import Project from "./projects";
import Resume from "./resume";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={ContactMe} />
    <Route path="/projects" component={Project} />
    <Route path="/resume" component={Resume} />
  </Switch>
);

export default Main;
