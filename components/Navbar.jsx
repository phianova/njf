import React from 'react'

const Navbar = () => {
  // highlight link to current page in red
  return (
    <div className="hidden sm:flex flex-row justify-around w-full p-5 border-b border-colour-link border-opacity-40 shadow-md fixed top-0 bg-colour-bg font-bold">
      <a href="/njf/" className="text-colour-link rounded-lg p-3 hover:text-colour-bg hover:bg-colour-link">Home</a>
      <a href="/njf/about" className="text-colour-link rounded-lg p-3 hover:text-colour-bg hover:bg-colour-link">About</a>
      <a href="/njf/research" className="text-colour-link rounded-lg p-3 hover:text-colour-bg hover:bg-colour-link">Research</a>
      <a href="/njf/publications" className="text-colour-link rounded-lg p-3 hover:text-colour-bg hover:bg-colour-link">Publications & Interviews</a>
      <a href="/njf/graphs" className="text-colour-link rounded-lg p-3 hover:text-colour-bg hover:bg-colour-link">Graphs</a>
      <a href="/njf/cv" className="text-colour-link rounded-lg p-3 hover:text-colour-bg hover:bg-colour-link">CV</a>
    </div>
  )
}

export default Navbar