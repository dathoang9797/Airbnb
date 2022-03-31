import "./NavBar.css";
import React, { useState, useEffect } from "react";
import { images } from "@Assets/Images";
import "animate.css";

export default function NavBar() {
  const { logo } = images;

  const [state, setState] = useState(false);
  const changeClassOnSroll = () => {
    const scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 80) {
      setState(true);
    } else {
      setState(false);
    }
  };
  window.addEventListener("scroll", changeClassOnSroll);
  return (
    <div className="nav-header nav-header-classic menu-space header-position header-white">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <nav
              className={
                state
                  ? "active navbar navbar-expand-lg navbar-light animate__fadeInDown  animate__animated"
                  : "navbar navbar-expand-lg navbar-light"
              }
            >
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <a className="navbar-brand " href="#">
                <img
                  src="https://easetemplate.com/html/rentkit/assets/images/logo.svg"
                  alt=""
                />
              </a>
              <div
                className="collapse navbar-collapse justify-between"
                id="navbarTogglerDemo03"
              >
                <ul className="navbar-nav me-auto ms-lg-3">
                  <li className="nav-item dropdown ">
                    <a
                      className="nav-link dropdown-toggle text-xl"
                      href="#"
                      id="homeDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Home
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="">
                          Classic
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href=".">
                          Modern
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="">
                          Hotel <span className="badge bg-primary">New</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown ">
                    <a
                      className="nav-link dropdown-toggle text-xl"
                      href="#"
                      id="blogDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="true"
                    >
                      Blog
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="blogDropdown"
                      data-bs-popper="none"
                    >
                      <li>
                        <a href="" className="dropdown-item">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="" className="dropdown-item">
                          Author
                        </a>
                      </li>
                      <li>
                        <a href="" className="dropdown-item">
                          Category
                        </a>
                      </li>
                      <li>
                        <a href="" className="dropdown-item">
                          Single
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-xl" href="">
                      Docs
                    </a>
                  </li>
                </ul>
                <a
                  href="./pages/add-listing.html"
                  className="btn btn-primary d-none d-lg-block"
                >
                  List Your Space
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
