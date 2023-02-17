import React from "react";
import "./App.css";

// importing images

import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Info } from "./components/Info";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

const App = () => {
  return (
    <div>
      <div className="wrapper">
        {/* <!-- header section --> */}
        <Header />
        {/* <!-- hero section --> */}
        <Hero />
        {/* <!-- info section --> */}
        <Info />
        {/* <!-- skills section --> */}
        <Skills />
        {/* <!-- project section --> */}
        <Projects />
        {/* <!-- about me section --> */}
        <AboutMe />
        {/* <!-- contact section --> */}
        <Contact/>
        {/* <!-- footer section --> */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
