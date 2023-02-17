import React from 'react'
import pp from "../assets/pp.png"


export const Projects = () => {
  return (
    <section className="section4 flex">
    <h1 className="title">My projects</h1>

    <div className="projects-container grid">
      <div className="project-card flex">
        <div className="top">
          <img src={pp} alt="" />
        </div>
        <div className="bottom">
          <p>January 4, 2023</p>
          <p>-commerce Full Stack web Applicatin Built Using React</p>
        </div>
      </div>

      <div className="project-card flex">
        <div className="top">
          <img src={pp} alt="" />
        </div>
        <div className="bottom">
          <p>January 4, 2023</p>
          <p>-commerce Full Stack web Applicatin Built Using React</p>
        </div>
      </div>

      <div className="project-card flex">
        <div className="top">
          <img src={pp} alt="" />
        </div>
        <div className="bottom">
          <p>January 4, 2023</p>
          <p>-commerce Full Stack web Applicatin Built Using React</p>
        </div>
      </div>
    </div>
  </section>  
  )
}

