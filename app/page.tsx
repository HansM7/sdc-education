import Header from "./components/header";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header></Header>
      <Hero></Hero>
      <Hero></Hero>
    </div>
  );
}
