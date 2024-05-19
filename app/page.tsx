import DetailClass from "./components/detail-class";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import HomeStack from "./components/home-stack";
import SectionInformationBasic from "./components/section-information-basic";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header></Header>
      <Hero></Hero>
      <SectionInformationBasic></SectionInformationBasic>
      <HomeStack></HomeStack>
      <DetailClass></DetailClass>
      {/* <Footer></Footer> */}
    </div>
  );
}
