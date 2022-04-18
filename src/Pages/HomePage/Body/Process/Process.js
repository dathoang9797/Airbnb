import React from "react";
import "./Process.css";
export default function Process() {
  return (
    <div className="py-lg-11 py-7 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-12 text-center">
            <div className="mb-12 mt-20">
              <h2 className="mb-1 h1">Our working Process</h2>
              <p className="h6">
                Aliquam ornare pellentesque eros nec fermentum.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-12 col-12">
            {/* card*/}
            <div className="card mb-3 mb-lg-0 border-0 shadow-sm">
              <div className="card-body p-10 ">
                <div className="icon-shape  text-white mb-5 rounded-circle">
                  1
                </div>
                <h4 className="mb-2 text__process h4">
                  Create a listing for free
                </h4>
                <p className="mb-0 text__p__process">
                  Morbi elit sem iaculis quis blandit onewse necpulvinar vitae
                  lectus one enean suultricesut.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-12">
            {/* card*/}
            <div className="card mb-3 mb-lg-0 border-0 shadow-sm">
              <div className="card-body p-10 ">
                <div className="icon-shape  text-white mb-5 rounded-circle">
                  2
                </div>
                <h4 className="mb-2 text__process h4">
                  How you host is up to you
                </h4>
                <p className="mb-0 text__p__process">
                  Vestibulum auctor mximus estquinia vulputate etesd phasellus
                  fermede ntum utodio aliquam laoreete.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-12">
            {/* card*/}
            <div className="card mb-3 mb-lg-0 border-0 shadow-sm">
              <div className="card-body p-10 ">
                <div className="icon-shape  text-white mb-5 rounded-circle">
                  3
                </div>
                <h4 className="mb-2 text__process h4">
                  Welcome your first guests
                </h4>
                <p className="mb-0 text__p__process">
                  Phasellus pulvinar volutpat justo quispose suere ested lorem
                  ipsume volutpat dui id nulla perdietin.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
