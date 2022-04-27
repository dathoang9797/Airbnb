import React from "react";
import "./Feature.css";
function Feature() {
  return (
    <div className="py-lg-11 py-7 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-12 text-center">
            <div className="mb-8">
              <h2 className="mb-1 h1 ">Featured Rental Cities </h2>
              <p className="mb-0 h7">
                Discover thousands of homes for rent in 50+ countries.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="row">
            {/* card*/}
            <div className="d-flex align-items-lg-stretch col-md-6 col-12 mb-4">
              <div
                className="card w-100 border-0 overlay-bg img-hover "
                style={{
                  backgroundImage: "url(/img/ny.jpg)",
                  backgroundSize: "cover",
                }}
              >
                <div className="pt-10 pl-4 pb-32 z-1">
                  <h3 className=" text-slate-50 mb-0 text-3xl display-2">
                    New York
                  </h3>
                  <p className="text-slate-50 mb-0">87 rentals</p>
                </div>
                <a
                  href="pages/listing-category.html"
                  className="stretched-link"
                />
              </div>
            </div>
            {/* card */}
            <div className="d-flex align-items-lg-stretch col-md-3 col-12 mb-4">
              <div
                className="card w-100 border-0 overlay-bg img-hover "
                style={{
                  backgroundImage: "url(./img/tokyo.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              >
                <div className="pt-10 pl-4 pb-32 z-1">
                  <h3 className="text-slate-50 mb-0  text-3xl display-2">
                    Tokyo
                  </h3>
                  <p className="text-slate-50 mb-0">68 rentals</p>
                </div>
                <a
                  href="pages/listing-category.html"
                  className="stretched-link"
                />
              </div>
            </div>
            {/* card */}
            <div className="d-flex align-items-lg-stretch col-md-3 col-12 mb-4">
              <div
                className="card w-100 border-0 overlay-bg img-hover "
                style={{
                  backgroundImage: "url(./img/aus.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              >
                <div className="pt-10 pl-4 pb-32 z-1">
                  <h3 className="text-slate-50 mb-0  text-3xl display-2">
                    Australia
                  </h3>
                  <p className="text-slate-50 mb-0">54 rentals</p>
                </div>
                <a
                  href="pages/listing-category.html"
                  className="stretched-link"
                />
              </div>
            </div>
            {/* card */}
            <div className="d-flex align-items-lg-stretch col-md-6 col-12 mb-4">
              <div
                className="card w-100 border-0 overlay-bg img-hover "
                style={{
                  backgroundImage: "url(./img/paris.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              >
                <div className="pt-10 pl-4 pb-32 z-1">
                  <h3 className="text-slate-50 mb-0  text-3xl display-2">
                    Paris
                  </h3>
                  <p className="text-slate-50 mb-0">221 rentals</p>
                </div>
                <a
                  href="pages/listing-category.html"
                  className="stretched-link"
                />
              </div>
            </div>
            {/* card */}
            <div className="d-flex align-items-lg-stretch col-md-6 col-12 mb-4">
              <div
                className="card w-100 border-0 overlay-bg img-hover "
                style={{
                  backgroundImage: "url(./img/chicago.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              >
                <div className="pt-10 pl-4 pb-32 z-1">
                  <h3 className="text-slate-50 mb-0  text-3xl display-2">
                    Chicago
                  </h3>
                  <p className="text-slate-50 mb-0">143 rentals</p>
                </div>
                <a
                  href="pages/listing-category.html"
                  className="stretched-link"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature
