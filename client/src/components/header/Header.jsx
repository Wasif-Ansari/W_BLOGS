import React from "react";
import "./header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="headerWrapper">
        <div className="headerTitles">
          <span className="headerTitleSm">WELCOME TO: </span>
          <span className="headerTitleLg"><h3 className="animate-charcter"> W-BLOGS </h3></span>
        </div>
        <div className="headerImg"></div>
      </div>
    </div>
  );
}
