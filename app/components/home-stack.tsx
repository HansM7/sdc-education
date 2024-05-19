import React from "react";

function HomeStack() {
  return (
    <section className="grid grid-cols-2 py-16 bg-blue-50">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img
            className="w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1AUGhPbE6sfpftoP-JJJxGhdRer5_12XPqvJ1Q0WJFQ&s"
            alt=""
          />
          <img
            className="w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1AUGhPbE6sfpftoP-JJJxGhdRer5_12XPqvJ1Q0WJFQ&s"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <h2 className="text-2xl">Desarrollo Frontend</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            amet animi, quas voluptate vitae reiciendis omnis dignissimos! Quia
            numquam omnis vero voluptates repudiandae quaerat nemo nobis, dicta
            eos harum similique?
          </p>
          <div>
            <ul>
              <li>Item 1 description</li>
              <li>Item 2 description</li>
              <li>Item 3 description</li>
            </ul>
          </div>

          <div className="mt-4">
            <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg">
              Ver temario frontend
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2 ">
          <h2 className="text-2xl">Desarrollo Backend</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            amet animi, quas voluptate vitae reiciendis omnis dignissimos! Quia
            numquam omnis vero voluptates repudiandae quaerat nemo nobis, dicta
            eos harum similique?
          </p>

          <div className="mt-4">
            <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg">
              Ver temario backend
            </button>
          </div>
        </div>
        <div>
          <img
            className="w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1AUGhPbE6sfpftoP-JJJxGhdRer5_12XPqvJ1Q0WJFQ&s"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default HomeStack;
