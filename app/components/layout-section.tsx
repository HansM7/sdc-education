import React from 'react'

function LayoutSection({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className='xl:px-52 md:px-16 px-8  py-8'>{children}</section>
  )
}

export default LayoutSection