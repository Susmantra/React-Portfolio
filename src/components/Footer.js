import React from 'react'

export const Footer = () => {
  return (
    <footer>
    <div className="footer-container flex">
      <div className="footer-top flex">
        <div>
          <h3>LINKS</h3>
          <ul className="flex">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>EXTERNAL LINKS</h3>
          <ul className="FLEX">
            <li>
              <a href=""></a>Youtube
            </li>
            <li>
              <a href=""></a>linkedIn
            </li>
            <li>
              <a href=""></a>GitHub
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)
}
