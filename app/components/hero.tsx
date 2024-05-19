"use client";

function Hero() {
  return (
    <section className="bg-blue-50 h-[80vh] flex px-32 items-center">
      <div className="grid grid-cols-3 gap-24">
        <div className="col-span-2 flex flex-col gap-6">
          <h1 className="text-6xl font-semibold">Somos un equipo de primera</h1>
          <p className="text-lg ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            eaque quod ullam, quidem alias libero incidunt, quae provident
            quisquam deleniti placeat! Exercitationem itaque impedit deleniti
            necessitatibus vel aliquid? Illum, qui.
          </p>
          <div>
            <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg">
              Conoce nuestro bootcamp
            </button>
          </div>
        </div>
        <div>
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
