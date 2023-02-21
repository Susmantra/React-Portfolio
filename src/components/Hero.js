import React from "react";
import photo from "../assets/photo.png";
import pp from "../assets/photo.png";
import { Layout } from "./Layout";

export const Hero = () => {
  return (
    <Layout>
    <section className="section1 grid">
      <div className="left">
        <img src={photo} width="250px" alt="" />
      </div>
      <div className="right flex">
        <div>
          <h2 className="name">Susma K C</h2>
          <p className="tag">Software Engineer</p>
        </div>
        <a href={pp} download>
          <button>
            Download Resume <i className="fa-solid fa-download"></i>
          </button>
        </a>
      </div>
    </section>
    </Layout>
  );
};
