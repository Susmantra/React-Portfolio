import React from 'react'

export const Header = () => {
  return (
    <header className="flex primary-header">
    <div className="flex logo">
      <h1>Susma K C</h1>
      <div>
        <h3 className="line">Web Developer</h3>
      </div>
    </div>
    <div className="right">
      <input type="checkbox" id="check" />
      <label htmlFor="" className="checkBtn">
        <i className="fa-solid fa-bars"></i>
      </label>
      <ul className="flex primary-navigation">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  </header>
  )
}

