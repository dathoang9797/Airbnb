import React from "react";
import "./Blog.css";
export default function Blog() {
  return (
    <div className="py-lg-11 py-7">
      <div className="container">
        <div className="row mt-20">
          {/* section heading */}
          <div className="col-md-12 col-sm-12 col-12 text-center">
            <div className="mb-8">
              <h2 className="mb-1 h1">Latest From Blog Posts </h2>
              <p>We want to make sure that you get to explore as much.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="mb-6 mb-md-0 blog__img">
              <a href="">
                <img
                  src="img/co-living.jpg"
                  alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                  className="w-100 rounded-3 img-hover"
                />
              </a>
              <div className="mt-4">
                <div className="text-sm mb-1">
                  <span className="me-2 font-weight-semi-bold">
                    Oct 17, 2021
                  </span>
                  <span className="font-weight-semi-bold span__blog">
                    <a href="#">Experiance</a>
                  </span>
                </div>
                <h4 className="mb-0 h4">
                  <a href="" className="text-inherit">
                    Aenean laoreet neque bibendum mi ullamcorper accumsan.
                  </a>
                </h4>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="mb-6 mb-md-0 blog__img">
              <a href="">
                <img
                  src="img/camping.png"
                  alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                  className="w-100 rounded-3 img-hover"
                />
              </a>
              <div className="mt-4">
                <div className="text-sm mb-1">
                  <span className="me-2 font-weight-semi-bold">
                    Oct 16, 2021
                  </span>
                  <span className="font-weight-semi-bold span__blog">
                    <a href="#">Homes</a>
                  </span>
                </div>
                <h4 className="mb-0 h4">
                  <a href="" className="text-inherit">
                    Nunc eu quam et massa tempus vehicula.
                  </a>
                </h4>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 col-12 d-md-none d-lg-block">
            <div className="mb-6 mb-md-0 blog__img">
              <a href="">
                <img
                  src="img/co-living.jpg"
                  alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                  className="w-100 rounded-3 img-hover"
                />
              </a>
              <div className="mt-4">
                <div className="text-sm mb-1">
                  <span className="me-2 font-weight-semi-bold">
                    Oct 15, 2021
                  </span>
                  <span className="font-weight-semi-bold span__blog">
                    <a href="#">Company</a>
                  </span>
                </div>
                <h4 className="mb-0 h4">
                  <a href="" className="text-inherit">
                    Lorem ipsum dolor sit amet simon consectetur adipisicing
                    elit.
                  </a>
                </h4>
              </div>
            </div>
          </div>

          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center mt-4">
            <a href="pages/blog.html" className="btn btn-primary">
              More Blogs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
