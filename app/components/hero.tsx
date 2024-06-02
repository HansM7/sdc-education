"use client";

import { Gift, Shapes } from "lucide-react";
import Link from "next/link";
import HeroIcon from "../icons/hero-icon";
import HeroCarousel from "./hero-carousel";

function Hero() {
  return (
    <section className="bg-blue-50 xl:h-[70vh] h-auto flex items-center w-full  relative">
      <div className="w-full md:h-[70vh] overflow-hidden bg-blue-50 opacity-50 absolute z-0 md:flex hidden ">
        {/* <img
          className="w-full h-full object-cover blur-sm"
          src="bg-hexagon.jpg"
          alt=""
        /> */}
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className=" xl:px-52 md:px-16 px-8  py-8 grid grid-cols-5 gap-8 z-10 ">
        <div className="lg:col-span-3 col-span-5 flex flex-col gap-6">
          <h1 className="md:text-5xl sm:text-4xl  text-2xl font-semibold animate-fade-right">
            Academia de Programacion
          </h1>
          <p className="md:text-xl sm:text-lg text-base text-gray-700 md:pr-16 animate-fade-right animate-delay-1000">
            Domina el futuro con las habilidades digitales del mañana.
            <br />
            Aprende a programar desde cero y desarrolla tu potencial tecnológico
            con nosotros.
          </p>

          <div className="animate-fade-right animate-delay-[1500ms]">
            <button className="px-4 py-3 bg-blue-600 text-white  rounded-lg flex gap-2 hover:bg-blue-700 transition-all">
              <span className="md:text-base text-sm ">Bootcamp gratuito</span>
            </button>
          </div>
        </div>
        <div className="lg:col-span-2 col-span-5 flex items-center">
          {/* <img
            className="w-full rounded-lg xl:object-contain xl:h-auto object-top h-[300px]"
            src="https://assets.exercism.org/assets/graphics/landing-page-top-74da2134b88efcf34b05e804987fdfb832771716.svg"
            alt=""
          /> */}
          {/* <HeroIcon></HeroIcon> */}
          <HeroCarousel></HeroCarousel>
        </div>
      </div>
    </section>
  );
}

export default Hero;

// https://codesandbox.io/p/sandbox/chaining-transition-and-a-spring-q6ffu?file=%2Fsrc%2FApp.tsx
