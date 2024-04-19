import React from 'react'

const Sidebar = () => {
  return (
    <div className="text-colour-link hidden sm:flex flex-col h-1/3 justify-around items-start p-5 fixed bg-colour-bg shadow-md rounded-r-xl right-0 top-40 text-2xl scroll-smooth">
    <h2 className="font-bold">Quick links:</h2>
    <a href="#full-data" className="underline decoration-dotted hover:text-colour-headings">Full data</a> 
    <a href="#mutual-degree" className="underline decoration-dotted hover:text-colour-headings">High mutual degree</a>
    <a href="#uk-far-right" className="underline decoration-dotted hover:text-colour-headings">UK far-right sites</a>
    </div>
  )
}

export default Sidebar