"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { RevealWrapper } from "next-reveal";
import { Carousel } from "keep-react";

function BootcampCourses() {
  const techs = [
    {
      id: 1,
      name: "Fundamentos Web",
      targets: [
        {
          title: "HTML",
          description: "Curso sobre que es HTMl",
        },
        {
          title: "CSS",
          description: "Curso sobre que es HTMl",
        },
        {
          title: "Javascript",
          description: "Curso sobre que es js",
        },
      ],
    },
    {
      id: 2,
      name: "Desarrollo Backend",
      targets: [
        {
          title: "HTML",
          description: "Curso sobre que es HTMl",
        },
        {
          title: "CSS",
          description: "Curso sobre que es HTMl",
        },
        {
          title: "Javascript",
          description: "Curso sobre que es js",
        },
      ],
    },
    {
      id: 3,
      name: "Desarrollo Frontend",
      targets: [
        {
          title: "HTML",
          description: "Curso sobre que es HTMl",
        },
        {
          title: "CSS",
          description: "Curso sobre que es HTMl",
        },
        {
          title: "Javascript",
          description: "Curso sobre que es js",
        },
      ],
    },
    {
      id: 4,
      name: "Base de Datos",
      targets: [
        {
          title: "HTML",
          description: "Curso sobre que es HTMl",
        },
        {
          title: "CSS",
          description: "Curso sobre que es HTMl",
        },
        {
          title: "Javascript",
          description: "Curso sobre que es js",
        },
      ],
    },
    {
      id: 5,
      name: "Desarrollo Full Stack",
      targets: [
        {
          title: "Nodejs",
          description: "Curso sobre que es HTMl",
        },
        {
          title: "CSS",
          description: "Curso sobre que es HTMl",
        },
        {
          title: "Javascript",
          description: "Curso sobre que es js",
        },
      ],
    },
  ];

  const [idSelected, setIdSelected] = useState(1);
  const [techSelected, setTechSelected] = useState<any>({ targets: [] });
  const [animate, setAnimate] = useState(true);

  function handleNumberSelected(item: any) {
    setIdSelected(item.id);
    setTechSelected(item);
    setAnimate(!animate); // Reset animation
  }

  useEffect(() => {
    setAnimate(true); // Trigger re-application of animation class
  }, [techSelected]);

  return (
    <section className=" py-16 xl:px-24 md:px-16 px-8 bg-white">
      <div className="w-full flex flex-col items-center pb-8">
        <h2 className="font-semibold text-2xl text-center">
          Desarrollo Web Full Stack
        </h2>
        <p className="text-gray-700  text-center text-lg font-extralight">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus quod
          eligendi nulla error autem illum dolores deleniti saepe magnam
          suscipit. Labore quasi, praesentium odit libero natus repudiandae
          deleniti aspernatur eaque.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-2">
          {techs.map((item, index) => (
            <RevealWrapper origin="left" key={index} delay={index * 200 + 500}>
              <div
                className={`rounded-lg px-3 py-8 border-2 border-blue-100 transition-all ${
                  item.id === techSelected.id ? " bg-blue-100 " : "bg-white"
                }`}
                role="button"
                onClick={() => handleNumberSelected(item)}
              >
                <span>❎</span>
                <span className="hidden md:visible">{item.name}</span>
              </div>
            </RevealWrapper>
          ))}
        </div>
        <div className="col-span-2 rounded-lg w-full bg-slate-200  p-4">
          <div className="w-full grid md:grid-cols-2 grid-cols-1 overflow-hidden gap-2 ">
            {animate &&
              techSelected.targets.map((item: any, index: number) => (
                <RevealWrapper
                  origin="bottom"
                  className={`bg-white py-8 rounded-lg flex justify-center items-center  `}
                  key={index}
                  delay={index * 200 + 500}
                >
                  {item.title}
                </RevealWrapper>
              ))}
            {/* {techSelected.targets.map((item: any, index: number) => (


              <div
                className={`bg-white ${
                  animate ? "animate-fade-up  " : ""
                }  `}
                key={index}
              >
                {item.title}
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BootcampCourses;
