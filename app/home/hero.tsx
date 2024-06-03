"use client";

import { Gift, Shapes } from "lucide-react";
import Link from "next/link";
import HeroIcon from "../icons/hero-icon";
import HeroCarousel from "../components/hero-carousel";
import LayoutSection from "../components/layout-section";
import { RevealWrapper } from "next-reveal";

function Hero() {
  return (
    <LayoutSection bg="bg-gray-50">
      <div className="grid grid-cols-2  z-10  h-[80vh] ">
        <div className=" flex flex-col gap-6 mt-16">
          <h1 className="md:text-[60px] sm:text-4xl  text-2xl font-bold animate-fade-right text-slate-800 md:leading-[60px]">
            Impulsa tu carrera con nuestra metodologia
          </h1>
          <p className="md:text-2xl sm:text-lg text-base  md:pr-16 animate-fade-right animate-delay-1000 text-slate-700 font-light">
            Conviértete en un experto en desarrollo web Full Stack con nuestros.
            Aprende y desarrolla proyectos reales que te prepararán para el{" "}
            <span className="bg-yellow-600 shiny-text">mercado laboral</span>.
            ¡Impulsa tu carrera tecnológica con nosotros!
          </p>

          <div className="animate-fade-right animate-delay-[1500ms]">
            <button className="px-4 py-3 bg-blue-600 text-white  rounded-lg flex gap-2 hover:bg-blue-700 transition-all">
              <span className="md:text-base text-sm ">Bootcamp gratuito</span>
            </button>
          </div>
        </div>
        <div className=" flex  flex-col gap-4">
          {/* <img
            className="w-full rounded-lg xl:object-contain xl:h-auto object-top h-[300px]"
            src="https://assets.exercism.org/assets/graphics/landing-page-top-74da2134b88efcf34b05e804987fdfb832771716.svg"
            alt=""
          /> */}
          {/* <HeroIcon></HeroIcon> */}
          {/* <HeroCarousel></HeroCarousel> */}
          {/* <img src="sapiens.png" alt="" /> */}

          <div className="w-full flex justify-end mt-16">
            <RevealWrapper
              delay={1000}
              origin="right"
              className="w-full flex justify-end"
            >
              <div className="w-1/2 hover:w-full transition-all duration-200 delay-100   bg-blue-500 rounded-lg  h-20 ">
                <span>Reactjs</span>
              </div>
            </RevealWrapper>
          </div>

          <div className="w-full flex justify-end mt-16">
            <RevealWrapper
              delay={1000}
              origin="right"
              className="w-full flex justify-center"
            >
              <div className="w-1/2 hover:w-full transition-all duration-200 delay-100  bg-green-500  rounded-lg  h-20">
                <span>Reactjs</span>
              </div>
            </RevealWrapper>
          </div>

          <div className="w-full flex justify-end mt-16">
            <RevealWrapper
              delay={1000}
              origin="right"
              className="w-full flex justify-start"
            >
              <div className="w-1/2 hover:w-full transition-all duration-200 delay-100  bg-violet-500   rounded-lg  h-20">
                <span>Reactjs</span>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </LayoutSection>
  );
}

export default Hero;

// https://codesandbox.io/p/sandbox/chaining-transition-and-a-spring-q6ffu?file=%2Fsrc%2FApp.tsx
