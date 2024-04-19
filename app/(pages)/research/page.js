import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col min-h-screen mx-auto mt-10 sm:mt-32 lg:mt-40 w-10/12">
      <h1 className="text-colour-headings text-3xl md:text-5xl font-bold">Research</h1>
      <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1 md:text-3xl">
        <div>
          <p className="font-bold">“Tradwives” Research <br></br>(2022 - ongoing)</p>
          <p className="mt-3">Thematic analysis of images on social media related to the radical right “tradwife” movement.</p>
        </div>
        <div className="mt-10">
          <p className="font-bold">Seeing Eye 2 Eye (SE2E) Project <br></br>(2022 - ongoing)</p>
          <p className="mt-3">Group interview study inspired by participatory action research</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default page