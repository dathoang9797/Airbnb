import React from "react";
import Body from "./Body/Body";
import NavBar from "./NavBar/NavBar";
// import Footer from "@Layouts/Footer/Footer";
import FooterHomePage from "./FooterHomePage/FooterHomePage";
import BackToTop from "@Components/BackToTop/BackToTop";
function HomePage() {
  return (
    <div>
      <NavBar />
      <Body />
      <FooterHomePage />
      <BackToTop />
    </div>
  );
}

export default HomePage