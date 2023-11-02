import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contactWrapper">
        <h1 className="contactTitle">Connect with me!!</h1>
        <div className="contactIcons">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="link conIcon"
          >
            <i class="fab fa-instagram-square"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/wasif-ansari-8725aa1bb/"
            rel="noopener noreferrer"
            target="_blank"
            className="link conIcon"
          >
            <i class="fab fa-linkedin"></i>
          </a>

          <a
            href="https://github.com/Wasif-Ansari"
            rel="noopener noreferrer"
            target="_blank"
            className="link conIcon"
          >
            <i class="fab fa-github-square"></i>
          </a>

          <a
            href=""
            rel="noopener noreferrer"
            target="_blank"
            className="link conIcon"
          >
            <i class="fab fa-facebook-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
