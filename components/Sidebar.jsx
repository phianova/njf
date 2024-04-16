import React from 'react'

const Sidebar = () => {
  return (
    <div className="text-colour-link hidden sm:flex flex-col h-1/3 justify-around items-start p-5 fixed bg-colour-bg shadow-md rounded-r-xl left-0 text-2xl">
    <h2>Quick links:</h2>
    <a href="#full-data" className="underline decoration-dotted hover:font-bold">Full data</a> 
    <a href="#mutual-degree" className="underline decoration-dotted hover:font-bold">High mutual degree</a>
    <a href="#uk-far-right" className="underline decoration-dotted hover:font-bold">UK far-right sites</a>
    </div>
  )
}

export default Sidebar