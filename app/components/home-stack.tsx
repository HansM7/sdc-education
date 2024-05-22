"use client";
import { ChevronRight } from "lucide-react";
import { RevealWrapper } from "next-reveal";
import React from "react";

function HomeStack() {
  const itemDescriptions = [
    "Desarrollo Frontend Basico",
    "Desarrollo Frontend Intermedio",
    "Desarrollo Backend Basico",
    "Desarrollo Backend Intermedio",
    "Base de datos relacionales y no relacionales",
  ];
  return (
    <section className="grid grid-cols-2 py-16 xl:px-24 md:px-16 px-8 bg-blue-50  gap-16">
      <RevealWrapper
        origin="left"
        className="flex flex-col gap-4 xl:col-span-1 col-span-2"
      >
        <div className="flex flex-col gap-2 ">
          <h2 className="text-2xl">Desarrollo Frontend</h2>
          <p className="text-gray-700">
            Aprende las habilidades más demandadas en la industria tecnológica
            actual con este bootcamp intensivo que te llevará desde los
            fundamentos del desarrollo web hasta la creación de aplicaciones
            interactivas con ReactJS.
          </p>

          <div>
            <ul>
              {itemDescriptions.map((item, index) => (
                <li className="" key={index}>
                  <RevealWrapper
                    origin="left"
                    delay={index + 500 + index * 500}
                    className="flex gap-2 items-center"
                  >
                    <ChevronRight size={16} className="text-violet-700" />
                    <span className="text-violet-700">{item}</span>
                  </RevealWrapper>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <button className="px-4 py-2 bg-blue-600 text-white  rounded-lg">
              Ver temario frontend
            </button>
          </div>
        </div>
      </RevealWrapper>
      <RevealWrapper
        origin="right"
        className="flex flex-col gap-4 xl:col-span-1 col-span-2"
      >
        <div className="flex flex-col gap-2 ">
          <h2 className="text-2xl">Desarrollo Backend</h2>
          <p className="text-gray-700">
            Conviértete en un desarrollador back-end completo con este bootcamp
            intensivo que te enseñará a crear aplicaciones web robustas y
            escalables utilizando Node.js, bases de datos relacionales y no
            relacionales, y las mejores prácticas de desarrollo modular y por
            capas.
          </p>

          <div>
            <ul>
              {itemDescriptions.map((item, index) => (
                <li className="" key={index}>
                  <RevealWrapper
                    origin="left"
                    delay={index + 500 + index * 500}
                    className="flex gap-2 items-center"
                  >
                    <ChevronRight size={16} className="text-violet-700" />
                    <span className="text-violet-700">{item}</span>
                  </RevealWrapper>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <button className="px-4 py-2 bg-blue-600 text-white  rounded-lg">
              Ver temario backend
            </button>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}

export default HomeStack;
