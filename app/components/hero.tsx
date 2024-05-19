"use client";

import { Shapes } from "lucide-react";

function Hero() {
  return (
    <section className="bg-blue-50 h-[70vh] flex px-32 items-center">
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-3 flex flex-col gap-6">
          <h1 className="text-5xl font-semibold">Bootcamp gratuito</h1>
          <p className="text-xl text-gray-700 pr-16">
            En SDC Education, ofrecemos un bootcamp gratuito de 3 meses en
            desarrollo web, enseñando React, Node.js, MongoDB y PostgreSQL.
            Nuestro objetivo es capacitar desarrolladores web junior y promover
            la igualdad de oportunidades.
          </p>

          <div>
            <button className="px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg flex gap-2   hover:bg-blue-700 transition-all">
              <span>Conoce nuestro bootcamp</span>
              <Shapes />
            </button>
          </div>
        </div>
        <div className="col-span-2">
          <img
            className="w-full rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPwkGuV5vLULJTE7FdtzoaQo_vVuSq5bmLz5YRiIGD7g&s"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
