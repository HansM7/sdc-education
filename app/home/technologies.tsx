"use client";

import { useEffect, useState } from "react";
import LayoutSection from "../components/layout-section";

function Technologies() {
  const techs = [
    {
      tag: "frontend",
      title: "HMTL",
      description: "ahdaowhdwad aw oawhd awod h",
      icon: "",
    },
    {
      tag: "frontend",

      title: "HMTL",
      description: "ahdaowhdwad aw oawhd awod h",
      icon: "",
    },
    {
      tag: "backend",

      title: "HMTL",
      description: "ahdaowhdwad aw oawhd awod h",
      icon: "",
    },
  ];
  const [tab, setTab] = useState("all");
  const [filtered, setFiltered] = useState(techs);

  function handleFilter() {
    if (tab === "all") {
      setFiltered(techs);
    } else {
      const dataFiltered = techs.filter((item) => item.tag === tab);
      setFiltered(dataFiltered);
    }
  }

  useEffect(() => {
    handleFilter();
  }, [filtered]);

  return (
    <LayoutSection bg="bg-gray-50">
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Nuestras tecnologías</h2>
        <div className="rounded-lg bg-gray-100 p-1 border w-fit flex gap-2 ">
          <button
            className={`rounded-md px-3 py-1 ${
              tab === "all" ? "bg-white" : ""
            } outline-none border-none transition-all duration-300`}
            onClick={() => setTab("all")}
          >
            Todos
          </button>
          <button
            className={`rounded-md px-3 py-1 ${
              tab === "frontend" ? "bg-white" : ""
            } outline-none border-none transition-all duration-300`}
            onClick={() => setTab("frontend")}
          >
            Frontend
          </button>
          <button
            className={`rounded-md px-3 py-1 ${
              tab === "backend" ? "bg-white" : ""
            } outline-none border-none transition-all duration-300`}
            onClick={() => setTab("backend")}
          >
            Backend
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {filtered.map((item, index) => (
            <div key={index} className=" bg-white p-4 rounded-lg ">
              <div>
                <img src="" alt="" />
                <span className="font-semibold">{item.title}</span>
              </div>
              <hr />
              <div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LayoutSection>
  );
}

export default Technologies;
