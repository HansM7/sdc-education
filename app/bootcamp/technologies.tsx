"use client";

import { useState } from "react";
import { technologies } from "../constants/technologies.constant";
import { Button, Modal } from "keep-react";

function BootcampTechnologies() {
  const [isOpen, setIsOpen] = useState(false);

  const [dataModal, setDataModal] = useState({
    name: "",
    short_description: "",
    long_description: "",
  });

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  function handleClickTechnologie(data: any) {
    setDataModal({
      name: data.name,
      short_description: data.short_description,
      long_description: data.long_description,
    });
    openModal();
  }
  return (
    <section className="py-16 xl:px-24 md:px-16 px-8">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {technologies.map((item, index) => (
          <div
            onClick={() => handleClickTechnologie(item)}
            key={index}
            className="flex bg-slate-100 rounded-lg md:p-4 p-2 hover:shadow-md transition-all hover:scale-[101%] md:gap-4 gap-2 cursor-pointer"
          >
            <div className=" rounded-lg overflow-hidden ">
              <img
                className="md:w-24 w-20 md:h-24 h-16 rounded-lg"
                src={item.url}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-700 md:text-base text-sm">
                {item.short_description}
              </p>
              <div className="mt-1 flex gap-2">
                <span className="p-2 border rounded-lg md:text-sm text-xs bg-white">
                  Frontend
                </span>
                <span className="p-2 border rounded-lg md:text-sm text-xs bg-white">
                  {item.enabled ? "Activo" : "Proximamente"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <Modal.Body className="space-y-3">
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
              Cancel
            </Button>
            <Button onClick={closeModal} size="sm" color="primary">
              Confirm
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default BootcampTechnologies;
