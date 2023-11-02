import React from "react";
import "./about.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about">
      <div className="aboutWrapper">
        <h1 className="aboutTitle">ABOUT</h1>
        <h4 className="aboutDesc">
          Hello visitors!! Welcome to <span>W-BLOGS</span>.
        </h4>
        <p>
          <span>W BLOGS </span> is a platform designed to delight you with a diverse range of blogs. 
          From <span>Technology, fashion and health to travel and self-care </span>, we're dedicated to providing captivating content. 
          Our passion is to turn your interests into an enriching online experience. 
          Explore, enjoy, and if you're inspired, join us in creating your own blog!"
        </p>
        <h2>Start your writer journey here: </h2>
        <Link to="/write">
          <button>Start writing a blog</button>
        </Link>
      </div>
    </div>
  );
}
