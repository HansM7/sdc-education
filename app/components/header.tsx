import Link from "next/link";

function Header() {
  return (
    <header className="w-full px-32 py-4 border-b">
      <nav className="flex justify-between items-center">
        <div className="flex gap-16">
          <div className="flex gap-4">
            <img width={42} height={32} src="icon-sdc.png" alt="" />
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-blue-400">SDC</span>
              <span className="text-slate-600 font-light text-sm">
                Education
              </span>
            </div>
          </div>
          <div className="flex items-center gap-8 font-semibold text-gray-700">
            <div>
              <span className="">
                <Link href={"/bootcamp"}>Bootcamp</Link>
              </span>
            </div>
            <div>
              <span>
                <Link href={"/bootcamp"}>Nosotros</Link>
              </span>
            </div>
            <div>
              <span>
                <Link href={"/bootcamp"}>Blog</Link>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
