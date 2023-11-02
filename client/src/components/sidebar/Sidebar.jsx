import React, { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("/categories");
      setCategories(res.data);
    };
    fetchCategories();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarItem">
          <div className="sidebarItemTitle">ABOUT ME</div>
          <div className="ab">
          <img
            src="https://img.freepik.com/free-photo/portrait-person-daily-life-new-york-city_23-2150820002.jpg?t=st=1698958684~exp=1698962284~hmac=a450310e34e0ea6ad137fdd21bfeaf27a00eadd99ab57d4b3f5b90fadea86c93&w=360"
            alt=""
            className="sidebarImg"
          />
          <p className="sidebarAbout">
          Hi! I'm Wasif Ansari I am currently pursuing my graduation (Btech) from Indian Institute of Technology, Patna
          </p>
          </div>
        </div>
        <div className="sidebarItem">
          <div className="sidebarItemTitle">CATEGORIES</div>
          <ul className="sidebarCategoryList">
            {categories.map((cat) => (
              <Link
                to={`/?category=${cat.name}`}
                className="link sidebarCategoryListItem"
                key={cat._id}
              >
                <li>{cat.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="sidebarItem">
          <div className="sidebarItemTitle">FOLLOW ME</div>
          <div className="sidebarIcons">
            <a
              href="https://www.linkedin.com/in/wasif-ansari-8725aa1bb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin sidebarIcon"></i>
            </a>

            <a
              href="https://github.com/Wasif-Ansari"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github-square sidebarIcon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
