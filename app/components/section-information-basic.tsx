"use client";

import { ChevronRight } from "lucide-react";

function SectionInformationBasic() {
  return (
    <section className="grid grid-cols-2 gap-8 py-16">
      <div>
        <img
          className="w-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1AUGhPbE6sfpftoP-JJJxGhdRer5_12XPqvJ1Q0WJFQ&s"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-4 justify-center">
        <span className="uppercase text-blue-600">
          {" "}
          Solo tu decides tu futuro
        </span>
        <h2 className="text-4xl">Conoce un poco mas de Bootcamp</h2>
        <p className="">
          Nuestro bootcamp esta orientado a personas que estan empezando en el
          mundo del desarrollo web. No es un bootcamp sencillo, es un bootcamp
          cuya mision es ensenarte sobre lo que verdaderamente necesitas como
          desarrollador en la vida real.
        </p>
        <span className="font-semibold">Ofrecemos:</span>
        <div>
          <ul>
            <li className="flex gap-2 items-center">
              <ChevronRight size={16} />
              <span>Desarrollo Frontend Basico</span>
            </li>
            <li className="flex gap-2 items-center">
              <ChevronRight size={16} />
              <span>Desarrollo Frontend Intermedio</span>
            </li>

            <li className="flex gap-2 items-center">
              <ChevronRight size={16} />
              <span>Desarrollo Backend Basico</span>
            </li>
            <li className="flex gap-2 items-center">
              <ChevronRight size={16} />
              <span>Desarrollo Backend Intermedio</span>
            </li>
            <li className="flex gap-2 items-center">
              <ChevronRight size={16} />
              <span>Base de datos relacionales y no relacionales</span>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg">
            Conoce nuestro bootcamp
          </button>
        </div>
      </div>
    </section>
  );
}

export default SectionInformationBasic;
