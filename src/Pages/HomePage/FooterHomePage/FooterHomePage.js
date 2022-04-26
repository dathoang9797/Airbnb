import React from "react";
import "./footerHome.css";
 function FooterHomePage() {
  return (
    <div className="footer pt-14 bg__color ">
      <div className="container">
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-4 col-6">
            <div className="mb-14">
              <h4 className=" mb-3 h5 font-weight-bold text-white">
                Explore Rentkit
              </h4>
              <div>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="leading-10 text-base">
                      List your property
                    </a>
                  </li>
                  <li>
                    <a href="#" className="leading-10 text-base">
                      Book with Confidence
                    </a>
                  </li>
                  <li>
                    <a href="#" className="leading-10 text-base">
                      Trust &amp; Safety
                    </a>
                  </li>
                  <li>
                    <a href="#" className="leading-10 text-base">
                      Vacation rental guides
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-6">
            <div className="mb-14">
              <h4 className=" mb-3 h5 font-weight-bold  text-white">
                For Owner
              </h4>
              <div>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="leading-10 text-base">
                      How it works
                    </a>
                  </li>
                  <li>
                    <a href="#" className="leading-10 text-base">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="leading-10 text-base">
                      Join as Owner
                    </a>
                  </li>
                  <li>
                    <a href="#" className="leading-10 text-base">
                      Help centre
                    </a>{" "}
                  </li>
                  <li>
                    <a href="#" className="leading-10 text-base">
                      Mobile App
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-6">
            <div className="mb-14">
              <h4 className=" mb-3 h5 font-weight-bold  text-white">Company</h4>
              <div>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="leading-10 text-base">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="leading-10 text-base">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="leading-10 text-base">
                      Clients
                    </a>
                  </li>
                  <li>
                    <a href="#" className="leading-10 text-base">
                      Team
                    </a>{" "}
                  </li>
                  <li>
                    <a href="#" className="leading-10 text-base">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="leading-10 text-base">
                      Press
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-xl-2 col-lg-2 col-md-4 col-6">
            <div className="mb-14">
              <h4 className=" mb-3 h5 font-weight-bold  text-white">Social</h4>
              <div>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="leading-10 text-base">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="leading-10 text-base">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="leading-10 text-base">
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a href="#" className="leading-10 text-base">
                      Google
                    </a>
                  </li>
                  <li>
                    <a href="#" className="leading-10 text-base">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-8 col-12">
            <div className="mb-14">
              <h4 className=" mb-3 h5 font-weight-bold  text-white">
                Rentkit deals in your inbox ?
              </h4>
              <p className="leading-10 text-base  ">
                Get special offers, travel inspiration, and more from Rentkit{" "}
              </p>
              <form>
                <div className="input-group mb-3 h5 font-weight-bold">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your email"
                    aria-label="Enter your email"
                    aria-describedby="subscriber"
                  />
                  <span className="btn btn-primary" id="subscriber">
                    Subscribe
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-12 col-12">
            <p className="fs-6 text-gray-400">
              © 2021 Rentkit. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FooterHomePage