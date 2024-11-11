"use client"

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <div className="main">
        <div className="logo">&lt;AR/&gt;</div>

        <div className="list">
          <ul className="ul">
            <li>
              <a href="#ABOUT" className="a smooth-scroll cursor-pointer">
                About
              </a>
            </li>

            <li>
              <a href="#WORK" className="a smooth-scroll cursor-pointer">
                Work
              </a>
            </li>

            <li>
              <a href="#TESTIMONIALS" className="a scroll-smooth cursor-pointer">
                Testimonials
              </a>
            </li>

            <li>
              <a href="#CONTACT" className="a scroll-smooth cursor-pointer">
                Contact me
              </a>
            </li>
          </ul>
        </div>

        <div className="togbtn">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="hb">
          <ul className="menu">
            <li className="li cursor-pointer">About</li>
            <li className="li cursor-pointer">Work</li>
            <li className="li cursor-pointer">Testimonials</li>
            <li className="li cursor-pointer">Contact me</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;