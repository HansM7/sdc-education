"use client";

function SectionInformationBasic() {
  return (
    <section className="grid grid-cols-2 gap-8 py-16">
      <div>
        <img
          className="w-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1AUGhPbE6sfpftoP-JJJxGhdRer5_12XPqvJ1Q0WJFQ&s"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-4 justify-center">
        <span className="uppercase text-blue-600"> GET TO KNOW ABOUT US</span>
        <h2 className="text-4xl">
          Dive into our Online Courses and Ignite Your Learning!
        </h2>
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
            Conoce nuestro bootcamp
          </button>
        </div>
      </div>
    </section>
  );
}

export default SectionInformationBasic;
