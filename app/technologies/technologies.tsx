"use client";

import { FormEvent, useState } from "react";
import { technologies } from "../constants/technologies.constant";
import { Button, Dropdown, Modal } from "keep-react";
import {
  Globe,
  Grid2x2Check,
  List,
  Phone,
  Search,
  SquareArrowDown,
  Users,
} from "lucide-react";
import { RevealWrapper } from "next-reveal";
import { useRouter } from "next/navigation";

function BootcampTechnologies() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const [dataModal, setDataModal] = useState({
    name: "",
    short_description: "",
    long_description: "",
  });

  const [dataTechnologies, setDataTechnologies] = useState(technologies);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  function redirectModalToBootcamp() {
    router.push("/bootcamp");
  }

  function handleClickTechnologie(data: any) {
    setDataModal({
      name: data.name,
      short_description: data.short_description,
      long_description: data.long_description,
    });
    openModal();
  }

  function handleFiltered(type: string) {
    if (type === "All") {
      setDataTechnologies(technologies);
    } else {
      const dataFiltered = technologies.filter((item) =>
        item.type.includes(type)
      );
      setDataTechnologies(dataFiltered);
    }
  }

  function handleSearch(word: string) {
    if (word === "") {
      setDataTechnologies(technologies);
    } else {
      const dataFiltered = technologies.filter((item) =>
        item.name.toLowerCase().includes(word.toLowerCase())
      );
      setDataTechnologies(dataFiltered);
    }
  }

  return (
    <section className="py-16 xl:px-24 md:px-16 px-4 flex flex-col gap-4">
      <div className="bg-slate-100 p-2 rounded-lg w-full flex md:flex-row flex-col justify-between gap-4">
        <div className="flex gap-4">
          <div className="w-full h-12 border rounded-lg p-2 flex gap-1 bg-white items-center">
            <Search className="text-slate-200" />
            <input
              className="h-full w-full outline-none"
              onChange={(e) => handleSearch(e.target.value)}
              type="text"
              name=""
              id=""
            />
          </div>
          <Dropdown
            className="z-50"
            action={<SquareArrowDown className="text-black" />}
          >
            <Dropdown.List>
              <Dropdown.Item onClick={() => handleFiltered("All")}>
                <List size={24} />
                Todos
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFiltered("Frontend")}>
                <Globe size={24} />
                Frontend
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFiltered("Backend")}>
                <Grid2x2Check size={24} />
                Backend
              </Dropdown.Item>
            </Dropdown.List>
          </Dropdown>
        </div>
        <div>
          <Button color="secondary" variant="outline">
            Solicitar curso
          </Button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 ">
        {dataTechnologies.map((item, index) => (
          <RevealWrapper
            origin="left"
            delay={index + 200 + index * 100}
            key={index}
            className={`z-0`}
          >
            <div
              onClick={() => handleClickTechnologie(item)}
              key={index}
              className="flex bg-slate-100 rounded-lg md:p-4 p-2 hover:shadow-md transition-all hover:scale-[101%] md:gap-4 gap-2 cursor-pointer "
            >
              <div className=" rounded-lg overflow-hidden ">
                <img
                  className="md:w-24 w-16  md:h-24 h-16  rounded-lg object-fill"
                  src={item.url}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-700 md:text-base text-sm">
                  {item.short_description}
                </p>
                <div className="mt-1 flex gap-1">
                  {item.type.map((t, index) => (
                    <span
                      className="p-2 border rounded-lg md:text-sm text-xs bg-white"
                      key={index}
                    >
                      {t}
                    </span>
                  ))}

                  <span
                    className={`p-2 border rounded-lg md:text-sm text-xs   ${
                      item.enabled ? "bg-green-300" : "bg-gray-300"
                    }`}
                  >
                    {item.enabled ? "Activo" : "Proximamente"}
                  </span>
                </div>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <Modal.Body className="space-y-3  md:w-[50%] w-[90%]">
          <Modal.Content>
            <div className="!mb-6">
              <h3 className="mb-2 text-body-1 font-medium text-metal-900">
                {dataModal.name}
              </h3>
              <p className="text-body-4 font-normal text-metal-600">
                {dataModal.long_description}
              </p>
            </div>
          </Modal.Content>
          <Modal.Footer>
            <Button
              onClick={closeModal}
              size="sm"
              variant="outline"
              color="secondary"
            >
              Cerrar
            </Button>
            <Button onClick={redirectModalToBootcamp} size="sm" color="primary">
              Saber mas
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default BootcampTechnologies;
