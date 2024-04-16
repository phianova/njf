import React from 'react'

const Navbar = () => {
  // highlight link to current page in red
  return (
    <div className="hidden sm:flex flex-row justify-around w-full p-5 border-b border-colour-link border-opacity-40 shadow-md fixed top-0 bg-colour-bg font-bold">
      <a href="/" className="text-colour-link rounded-lg p-3 hover:text-colour-bg hover:bg-colour-link">Home</a>
      <a href="/about" className="text-colour-link rounded-lg p-3 hover:text-colour-bg hover:bg-colour-link">About</a>
      <a href="/research" className="text-colour-link rounded-lg p-3 hover:text-colour-bg hover:bg-colour-link">Research</a>
      <a href="/publications" className="text-colour-link rounded-lg p-3 hover:text-colour-bg hover:bg-colour-link">Publications & Interviews</a>
      <a href="/graphs" className="text-colour-link rounded-lg p-3 hover:text-colour-bg hover:bg-colour-link">Graphs</a>
      <a href="/cv" className="text-colour-link rounded-lg p-3 hover:text-colour-bg hover:bg-colour-link">CV</a>
    </div>
  )
}

export default Navbar