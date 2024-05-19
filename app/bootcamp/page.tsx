import { Metadata } from "next";
import Header from "../components/header";
import BootcampHero from "./hero";
import BootcampTechnologies from "./technologies";

export const metadata: Metadata = {
  title: "SDC - Education Bootcamp",
  description:
    "SDC Education ofrece un bootcamp gratuito de desarrollo web Full Stack de 3 meses, enseñando tecnologías clave como React, Node.js, MongoDB y PostgreSQL. Diseñado para principiantes sin experiencia previa en programación, nuestro bootcamp te capacita para desarrollar aplicaciones web desde cero y prepararte para roles de desarrollador web junior.",
  openGraph: {
    title: "Bootcamp gratuito de desarrollo web Full Stack en 3 meses. ",
    description:
      "SDC Education ofrece un bootcamp gratuito de desarrollo web full-stack de 3 meses, donde aprenderás las tecnologías más demandadas por la industria, como React, Node.js, MongoDB y PostgreSQL. No necesitas experiencia previa en programación. Nuestro bootcamp está diseñado para principiantes que quieren aprender a desarrollar aplicaciones web desde cero. Al finalizar el bootcamp, estarás preparado para trabajar como desarrollador web junior en empresas de tecnología. Además del bootcamp gratuito, también ofrecemos bootcamps avanzados con costo, donde podrás profundizar tus conocimientos en áreas específicas del desarrollo web. Nuestra misión es democratizar la educación en desarrollo web y hacer que estas habilidades sean accesibles para todos.",
  },
};

function Page() {
  return (
    <div className="flex flex-col">
      <Header></Header>
      <BootcampHero></BootcampHero>
      <BootcampTechnologies></BootcampTechnologies>
    </div>
  );
}

export default Page;
