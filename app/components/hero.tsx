"use client";

import { Shapes } from "lucide-react";
import Link from "next/link";

function Hero() {
  return (
    <section className="bg-blue-50 xl:h-[70vh] h-auto flex items-center w-full  relative">
      <div className="w-full md:h-[70vh] overflow-hidden bg-blue-50 opacity-50 absolute z-0 md:flex hidden ">
        <img
          className="w-full h-full object-cover blur-sm"
          src="bg-hexagon.jpg"
          alt=""
        />
      </div>
      <div className=" xl:px-24 md:px-16 px-8  py-8 grid grid-cols-5 gap-8 z-10 ">
        <div className="xl:col-span-3 col-span-5 flex flex-col gap-6">
          <h1 className="md:text-5xl sm:text-4xl  text-2xl font-semibold animate-fade-right">
            Bootcamp gratuito
          </h1>
          <p className="md:text-xl sm:text-lg text-base text-gray-700 md:pr-16 animate-fade-right animate-delay-1000">
            En SDC Education, ofrecemos un bootcamp gratuito de 3 meses en
            <span className="font-semibold pl-2 text-violet-600">
              {" "}
              Desarrollo Web Full Stack
            </span>
            , enseñando React, Node.js, MongoDB y PostgreSQL. Nuestro objetivo
            es capacitar desarrolladores web junior y promover la igualdad de
            oportunidades.
          </p>

          <div className="animate-fade-right animate-delay-[1500ms]">
            <button className="px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg flex gap-2   hover:bg-blue-700 transition-all">
              <span className="md:text-base text-sm ">
                Conoce nuestro bootcamp
              </span>
              <Shapes />
            </button>
          </div>
          <div className="border-2 border-violet-400 flex md:gap-8 gap-4 w-fit p-3 rounded-lg items-center animate-fade-right animate-delay-[1500ms]">
            <img width={42} height={32} src="icon-sdc.png" alt="" />
            <div className="flex flex-col md:text-base text-sm ">
              <p className="">
                Conoce los terminos y condiciones de nuestro bootcamp
              </p>
              <Link href={""} className="text-violet-600 w-fit ">
                Ver mas...
              </Link>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 col-span-5">
          <img
            className="w-full rounded-lg xl:object-contain xl:h-auto object-top h-[300px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPwkGuV5vLULJTE7FdtzoaQo_vVuSq5bmLz5YRiIGD7g&s"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
