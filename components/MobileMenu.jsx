"use client"
import React from 'react'

const MobileMenu = () => {
    const handleClick = () => {
        const mobileMenu = document.getElementById("mobile-menu");
        mobileMenu.classList.toggle("flex");
        mobileMenu.classList.toggle("hidden");
    }
  return (
    <div className="flex flex-col sm:hidden mt-2 mx-2 p-3">
        <div>
            <button onClick={handleClick}><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="36"
            height="36"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-colour-link">
            <path d="M3 12h18M3 6h18M3 18h18"></path>
            </svg>
            </button>
        </div>
    <div className="hidden flex-col" id="mobile-menu">
      <a href="/" className="text-colour-link py-1 border-b border-colour-link border-opacity-40">Home</a>
      <a href="/about" className="text-colour-link py-1 border-b border-colour-link border-opacity-40">About</a>
      <a href="/research" className="text-colour-link py-1 border-b border-colour-link border-opacity-40">Research</a>
      <a href="/publications" className="text-colour-link py-1 border-b border-colour-link border-opacity-40">Publications & Interviews</a>
      <a href="/graphs" className="text-colour-link py-1 border-b border-colour-link border-opacity-40">Graphs</a>
      <a href="/cv" className="text-colour-link py-1 border-b border-colour-link border-opacity-40">CV</a>
    </div>
    </div>
  )
}

export default MobileMenu