"use client";

import LayoutSection from "../components/layout-section";

function Programs() {
  return (
    <LayoutSection bg="bg-gray-50">
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">
          Elige tu camino en tecnología
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
          corrupti molestiae ut. Debitis natus earum quae, perspiciatis in
          ratione accusamus illo obcaecati cumque voluptatibus amet dolorum
          placeat nihil, repudiandae quos?
        </p>
        <div>
          <h3 className="font-semibold text-lg">Programas</h3>
          <div className="grid grid-cols-3 mt-4 gap-8">
            <div className="rounded-lg overflow-hidden flex flex-col  bg-white shadow-small">
              <img
                className="w-full"
                src="https://www.soyhenry.com/_next/image?url=%2Fimages%2FDesarrollo-Full-Stack.webp&w=640&q=75"
                alt=""
              />
              <div className="flex flex-col gap-4 px-4 py-6">
                <span className="font-semibold">Fundamentos Web</span>
                <div className="flex gap-4">
                  <span className="rounded-lg bg-violet-100 border border-violet-400 px-2 ">
                    Part time
                  </span>
                  <span className="rounded-lg bg-violet-100 border border-violet-400 px-2 ">
                    Intensivo
                  </span>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium nulla alias, at ut corporis eveniet, vel ex id
                    fuga in veniam.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden flex flex-col  bg-white shadow-small">
              <img
                className="w-full"
                src="https://www.soyhenry.com/_next/image?url=%2Fimages%2FDesarrollo-Full-Stack.webp&w=640&q=75"
                alt=""
              />
              <div className="flex flex-col gap-4 px-4 py-6">
                <span className="font-semibold">Desarrollo Full Stack</span>
                <div className="flex gap-4">
                  <span className="rounded-lg bg-violet-100 border border-violet-400 px-2 ">
                    Part time
                  </span>
                  <span className="rounded-lg bg-violet-100 border border-violet-400 px-2 ">
                    Intensivo
                  </span>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium nulla alias, at ut corporis eveniet, vel ex id
                    fuga in veniam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutSection>
  );
}

export default Programs;
