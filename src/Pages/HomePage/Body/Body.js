import React from "react";
import Banner from "./Banner/Banner";
import Feature from "./Feture/Feature";

export default function Body() {
  return (
    <div className="d-flex flex-wrap w-100">
      <div className="flex-1">
        <Banner />
        <Feature />
      </div>
    </div>
  );
}
