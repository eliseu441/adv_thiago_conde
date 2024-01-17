import React from "react";  
import Menu from "../common/Menu/Menu";
import TopAbout from "./TopAbout";
import HomeIntro from "./HomeIntro";
import OurService from "../Pages/Service/OurService";
import Footer from "../common/Footer/FooterThree";

const Home = () => {
  return (
    <>
      <Menu />
      <HomeIntro />
      <TopAbout />
      <OurService/>
      <Footer/>
    </>
  );
};

export default Home;
