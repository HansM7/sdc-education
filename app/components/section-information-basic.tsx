"use client";

import { BookMarked, ChevronRight } from "lucide-react";
import { RevealWrapper } from "next-reveal";

function SectionInformationBasic() {
  const itemDescriptions = [
    "Desarrollo Frontend Basico",
    "Desarrollo Frontend Intermedio",
    "Desarrollo Backend Basico",
    "Desarrollo Backend Intermedio",
    "Base de datos relacionales y no relacionales",
  ];
  return (
    <section className="grid grid-cols-2 gap-8 py-16 xl:px-24 md:px-16 px-8">
      <RevealWrapper origin="left" className="md:col-span-1 col-span-2">
        <img
          className="w-full h-full object-cover rounded-lg shadow-md "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1AUGhPbE6sfpftoP-JJJxGhdRer5_12XPqvJ1Q0WJFQ&s"
          alt=""
        />
      </RevealWrapper>
      <RevealWrapper
        origin="right"
        className="md:col-span-1 col-span-2 flex flex-col gap-4 justify-center"
      >
        <div className="uppercase text-blue-600 flex gap-2 ">
          <BookMarked strokeWidth={1} size={24} />
          <span>Solo tu decides tu futuro</span>
        </div>
        <h2 className="xl:text-4xl text-2xl">
          Conoce un poco mas del Bootcamp
        </h2>
        <p className="text-gray-700">
          Nuestro bootcamp esta orientado a personas que estan empezando en el
          mundo del desarrollo web. No es un bootcamp sencillo, es un bootcamp
          cuya mision es ensenarte sobre lo que verdaderamente necesitas como
          desarrollador en la vida real.
        </p>
        <span className="font-semibold">Ofrecemos:</span>
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
          <button className="px-4 py-2 bg-blue-600 text-white  rounded-lg md:text-base text-sm">
            Ver mas...
          </button>
        </div>
      </RevealWrapper>
    </section>
  );
}

export default SectionInformationBasic;
