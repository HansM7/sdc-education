import React from "react";

function LayoutSection({
  children,
  bg,
}: Readonly<{
  children: React.ReactNode;
  bg: string;
}>) {
  return (
    <section className={` xl:px-32 md:px-16 px-8  py-8 ${bg}`}>
      {children}
    </section>
  );
}

export default LayoutSection;
