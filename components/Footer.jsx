
import React from 'react'

const Footer = () => {
  return (
    <div className="sm:fixed sm:bottom-0 text-base w-full text-center p-5 border-t border-colour-text border-dashed bg-colour-bg flex flex-row flex-wrap justify-center">
      <p>NextJS site created by <a href="https://phianova.github.io/portfolio" target="_blank" className="hover:text-colour-link underline decoration-dotted">Sophia Warren</a>.</p>
      <span className="sm:w-3"></span>
      <p>Original CSS & design by <a href="https://gitlab.com/mun-tonsi/kule" target="_blank" className="hover:text-colour-link underline decoration-dotted">Genevieve Clifford</a>.</p>
    </div>
  )
}

export default Footer