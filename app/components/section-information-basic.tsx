"use client";

import { BookMarked, ChevronRight } from "lucide-react";
import { RevealWrapper } from "next-reveal";
import LayoutSection from "./layout-section";

function SectionInformationBasic() {
  const data = [
    {
      title: "Desarrollo Frontend",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste velit, dignissimos quod earum eaque impedit commodi.",
    },
    {
      title: "Desarrollo Frontend",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste velit, dignissimos quod earum eaque impedit commodi.",
    },
    {
      title: "Desarrollo Frontend",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste velit, dignissimos quod earum eaque impedit commodi.",
    },
  ];
  return (
    <LayoutSection bg="bg-gray-50">
      <div className="grid  md:grid-cols-3 gap-8 h-[90vh]">
        {data.map((item, index) => (
          <RevealWrapper
            delay={index * 200 + 800}
            origin="bottom"
            className="bg-violet-200  grid grid-cols-5 h-fit rounded-lg p-4"
            key={index}
          >
            <div className="flex flex-col col-span-3">
              <RevealWrapper delay={1200} origin="left" className="">
                <span className="text-xl font-semibold">{item.title}</span>
              </RevealWrapper>
              <RevealWrapper delay={1200} origin="left" className="">
                <p>{item.description}</p>
              </RevealWrapper>
            </div>
            <div className="col-span-2">
              <RevealWrapper delay={1200} origin="right" className="">
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/frontend-developer-7364653-6024620.png?f=webp"
                  alt=""
                />
              </RevealWrapper>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </LayoutSection>
  );
}

export default SectionInformationBasic;
