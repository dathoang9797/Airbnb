import React from "react";
import "./becomehost.css";
function BecomeHost() {
  return (
    <div
      className="py-52"
      style={{
        background: "url(./img/room2.jpg)no-repeat",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-xl-6 col-lg-7 col-md-12 col-sm-12 col-12">
            <h2 className="text-white mb-2 h1 font-weight-bold">
              Want To Become Host?
            </h2>
            <p className="text-white mb-6 lead">
              Fusce ut varius estfacilisis tellusecenas ornare suscipit justsed
              dapibus ante.
            </p>
            <button className="btn btn-light h5">List your space</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BecomeHost