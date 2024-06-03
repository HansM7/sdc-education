"use client";

import Header from "../components/header";
import Hero from "./hero";
import LayoutSection from "../components/layout-section";
import SectionInformationBasic from "../components/section-information-basic";

import "./home.css";
import Programs from "./programs";
import Technologies from "./technologies";

function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <SectionInformationBasic></SectionInformationBasic>
      <Programs></Programs>
      <Technologies></Technologies>
    </>
  );
}

export default Home;
