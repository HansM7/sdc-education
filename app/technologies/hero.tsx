function TechnologyHero() {
  const technologies = [
    {
      name: "HTML",
      url: "https://cdn.iconscout.com/icon/free/png-256/free-html-5-1-1175208.png?f=webp",
      enabled: true,
    },
    {
      name: "CSS",
      url: "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png",
      enabled: true,
    },
    {
      name: "JavaScript",
      url: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      enabled: true,
    },
    {
      name: "TypeScript",
      url: "https://cdn-icons-png.freepik.com/512/5968/5968381.png",
      enabled: true,
    },
    {
      name: "ReactJS",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
      enabled: true,
    },
    {
      name: "NodeJS",
      url: "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
      enabled: true,
    },
    {
      name: "PostgreSQL",
      url: "https://static-00.iconduck.com/assets.00/postgresql-icon-1987x2048-v2fkmdaw.png",
      enabled: true,
    },
    {
      name: "MongoDB",
      url: "https://www.svgrepo.com/show/331488/mongodb.svg",
      enabled: true,
    },
    {
      name: "NestJS",
      url: "https://static-00.iconduck.com/assets.00/nestjs-icon-2048x2040-3rrvcej8.png",
      enabled: false,
    },
    {
      name: "NextJS",
      url: "https://static-00.iconduck.com/assets.00/next-js-icon-2048x2048-5dqjgeku.png",
      enabled: false,
    },
    {
      name: "Golang",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9sg41iWe1oEKwR2UXXNv-W8bshhb5ShKcSnMBe3J0aA&s",
      enabled: false,
    },
    {
      name: "Spring Boot",
      url: "https://static-00.iconduck.com/assets.00/spring-icon-256x256-2efvkvky.png",
      enabled: false,
    },
  ];
  return (
    <section className="w-full min-h-[60vh] py-16 xl:px-24 md:px-16 px-8 bg-blue-50 flex items-center">
      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap justify-center gap-2">
          {technologies.map((item, index) => (
            <div
              key={index}
              className={`md:p-4 p-3 flex flex-col items-center justify-center overflow-hidden  rounded-3xl bg-white border-2 ${
                item.enabled
                  ? "border-violet-400"
                  : "border-gray-500 cursor-no-drop"
              }  hover:scale-105 hover:bg-violet-50 transition-all cursor-pointer group `}
            >
              <img
                className={`w-12 rounded-lg object-cover ${
                  !item.enabled && "blur-[1px]"
                }`}
                src={item.url}
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="md:text-4xl text-2xl font-semibold text-center">
            Aplicamos tecnologias de Vanguardia
          </h1>
          <p className="md:text-xl text-base text-center text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo nihil
            labore dolor quisquam nostrum voluptas inventore ex ullam omnis
            dolorem ratione necessitatibus suscipit veritatis, natus nulla
            dignissimos quibusdam, facere quo!
          </p>
        </div>
      </div>
    </section>
  );
}

export default TechnologyHero;

//todo referer https://exercism.org/tracks
