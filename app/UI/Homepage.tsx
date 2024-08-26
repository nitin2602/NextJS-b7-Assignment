import React from "react";
import Navbar from "./../_components/Navbar";
import Header from "./../_components/Header";
import Topbar from "./../_components/Topbar";
import Main from "../_components/Main";
import Footer from "./../_components/Footer";

function Homepage() {
  return (
    <>
        <div className=" flex-col justify-center items-center mt-8 mx-5 md:mt-[70px] md:mx-10 ">
          <Navbar />
          <Header />
          <Topbar />
          <Main />
        </div>
        <Footer />
    </>
  );
}

export default Homepage;
