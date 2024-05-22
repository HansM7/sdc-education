import Link from "next/link";

function Header() {
  return (
    <header className="w-full xl:px-24 md:px-16 px-8 py-4 border-b">
      <nav className="w-full flex justify-between items-center">
        <Link href={"/"} className="flex gap-4">
          <img className="md:w-12 md:h-12 w-8 h-8" src="icon-sdc.png" alt="" />
          <div className="flex flex-col">
            <span className="md:text-lg text-sm font-semibold text-blue-600">
              SDC
            </span>
            <span className="text-slate-600 font-light md:text-sm text-xs">
              Education
            </span>
          </div>
        </Link>
        <div className="md:flex hidden items-center gap-8 font-semibold text-gray-700">
          <div>
            <span className="">
              <Link href={"/bootcamp"}>Bootcamp</Link>
            </span>
          </div>
          <div>
            <span>
              <Link href={"/technologies"}>Tecnologias</Link>
            </span>
          </div>
          <div>
            <span>
              <Link href={"/bootcamp"}>Nosotros</Link>
            </span>
          </div>
        </div>
        {/* <div className="flex gap-16">
          
         
        </div> */}
      </nav>
    </header>
  );
}

export default Header;
