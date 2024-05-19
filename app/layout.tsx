import type { Metadata } from "next";
import { Inter, Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
const poppins = Poppins({
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "SDC - Education",
  description:
    "SDC Education ofrece un bootcamp gratuito de desarrollo web Full Stack de 3 meses, enseñando tecnologías clave como React, Node.js, MongoDB y PostgreSQL. Diseñado para principiantes sin experiencia previa en programación, nuestro bootcamp te capacita para desarrollar aplicaciones web desde cero y prepararte para roles de desarrollador web junior.",
  openGraph: {
    title: "Bootcamp gratuito de desarrollo web Full Stack en 3 meses. ",
    description:
      "SDC Education ofrece un bootcamp gratuito de desarrollo web full-stack de 3 meses, donde aprenderás las tecnologías más demandadas por la industria, como React, Node.js, MongoDB y PostgreSQL. No necesitas experiencia previa en programación. Nuestro bootcamp está diseñado para principiantes que quieren aprender a desarrollar aplicaciones web desde cero. Al finalizar el bootcamp, estarás preparado para trabajar como desarrollador web junior en empresas de tecnología. Además del bootcamp gratuito, también ofrecemos bootcamps avanzados con costo, donde podrás profundizar tus conocimientos en áreas específicas del desarrollo web. Nuestra misión es democratizar la educación en desarrollo web y hacer que estas habilidades sean accesibles para todos.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
