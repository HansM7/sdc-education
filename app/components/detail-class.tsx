"use client";

import { BookMarked, ChevronRight } from "lucide-react";
import { RevealWrapper } from "next-reveal";

function DetailClass() {
  const advantages = [
    "Clases 100% virtuales",
    "Docentes y tutores altamente capacitados",
    "Pruebas y evaluaciones semanales",
  ];
  return (
    <section className="py-16 xl:px-24 md:px-16 px-8">
      <div className="w-full grid grid-cols-2 gap-8">
        <RevealWrapper
          origin="left"
          className="flex flex-col gap-2 md:col-span-1 col-span-2"
        >
          <div className="uppercase text-blue-600 flex gap-2 ">
            <BookMarked strokeWidth={1} size={24} />
            <span>Aprendizaje continuo</span>
          </div>
          <h2 className="xl:text-4xl text-2xl">Como seran las clases?</h2>
          <p className="text-gray-700">
            Nuestro bootcamp esta orientado a personas que estan empezando en el
            mundo del desarrollo web. No es un bootcamp sencillo, es un bootcamp
            cuya mision es ensenarte sobre lo que verdaderamente necesitas como
            desarrollador en la vida real.
          </p>
          <span className="font-semibold">Ofrecemos:</span>
          <div>
            <ul>
              {advantages.map((item, index) => (
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
        <RevealWrapper
          origin="right"
          className=" rounded-lg   md:col-span-1 col-span-2"
        >
          <img
            className="rounded-lg shadow-md object-cover h-full"
            src="https://img.freepik.com/free-photo/team-meeting-online-conference-call_23-2148890422.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715040000&semt=ais"
            alt=""
          />
        </RevealWrapper>
      </div>
    </section>
  );
}

export default DetailClass;
