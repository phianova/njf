import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col min-h-screen mx-auto mt-10 sm:mt-32 lg:mt-40 mb-32 w-10/12">
      <h1 className="text-colour-headings text-3xl md:text-5xl font-bold">Publications & interviews</h1>
      <div className="flex flex-col justify-around mt-4">
        <p className="my-3">Szojka, Z. A., Nicol, A., <span className="font-bold">Frenguelli, N. D.</span>, Rooy, D. L., & Henderson, H. (2022). <br></br>The impact of multiple interviews on the accuracy and narrative coherence of children's memories. <br></br><span className="italic">Psychology, Crime & Law, 28</span>(10), 980-1003.</p>
        <p className="my-3">Hegemony and right-wing extremism: Exploring constructions of masculinity in right wing terrorist manifestos (with reviewers at Critical Studies in Terrorism).</p>
        <p className="my-3">Transphobia in the Buffalo Shooter's Manifesto. <br></br>Published by <a href="https://voxpol.eu/transphobia-in-the-buffalo-shooters-manifesto/" target="_blank" className="text-colour-link underline decoration-dotted hover:font-bold">VOX-Pol Blog</a>.</p>
        <p className="my-3">My wish to be a #Tradwife: An introduction to tradwife memes on Whisper. <br></br>Published by <a href="https://gnet-research.org/2023/05/18/mywishtobeatradwife/" target="_blank" className="text-colour-link underline decoration-dotted hover:font-bold">GNET Insights</a>.</p>
        <p className="my-3">Tech Against Terrorism Podcast: <br></br><a href="https://podcast.techagainstterrorism.org/1684819/13708275-what-is-the-tradwives-movement" target="_blank" className="text-colour-link underline decoration-dotted hover:font-bold">What is the #tradwives movement?</a></p>
      </div>
    </div>
  )
}

export default page