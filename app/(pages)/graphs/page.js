
import Sidebar from '../../../components/Sidebar'
import React from 'react'
import FullPageModal from '../../../components/FullPageModal'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'

const page = () => {
  return (
    <div className="flex flex-col min-h-screen mx-auto mt-10  md:text-3xl mb-32 w-10/12 scroll-smooth">
      <Sidebar />
      <div className="sm:mr-48 scroll-smooth">
        <div className="h-screen flex flex-col">
          <h1 className="text-colour-headings text-3xl md:text-5xl pt-10 sm:pt-32 font-bold" id="top">Graphs</h1>
          <p className="mt-10">The graphs here are massive scalable vector graphics (SVGs) that cannot be viewed meaningfully all at once on one screen.</p>
          <p >Explore the sections below to view how some of the websites in my research connect to each other. If you zoom in on each graph you can see the individual domain names that appear in my research.</p>
          <a className="justify-self-end" href="#full-data"><FaArrowDown className="m-3 hover:text-colour-link"/></a>
        </div>
        <div className="h-screen flex flex-col">
          <h2 className="text-colour-headings font-bold pt-10 sm:pt-32 mb-3" id="full-data">Full data</h2>
          <p>This first image is a draft of my PhD data. The nodes in this graph are coloured by modularity, meaning that websites that are mostly connected to each other are the same colour.</p>
          <FullPageModal title="Full data" source="netlocationsfirstlook.svg" />
          {/* <div className="overflow-scroll max-h-1/2 max-w-full">
            <object type="image/svg+xml" data="netlocationsfirstlook.svg"></object>
          </div> */}
          <div className="justify-self-end flex flex-row">
            <a href="#top"><FaArrowUp className="m-3 hover:text-colour-link" /></a>
            <a href="#mutual-degree"><FaArrowDown className="m-3 hover:text-colour-link" /></a>
          </div>
        </div>
        <div className="h-screen">
          <h2 className="text-colour-headings font-bold pt-10 sm:pt-32 mb-3" id="mutual-degree">Mutual degree greater than 1</h2>
          <p>This is another draft image. This time, only the websites with a mutual degree of at least 1 are shown. This means that the websites that are shown here are the websites that have reciprocal links with another website.
            <br></br>We can take from this that these websites are the most embedded in their networks. Interestingly, when you filter the graph like this, the websites that are left are some of the most extreme.</p>
          {/* <object type="image/svg+xml" data="mutualdegree1.svg"></object> */}
          <FullPageModal title="Mutual degree greater than 1" source="mutualdegree1.svg" />
          <div className="justify-self-end flex flex-row">
            <a href="#full-data"><FaArrowUp className="m-3 hover:text-colour-link" /></a>
            <a href="#uk-far-right"><FaArrowDown className="m-3 hover:text-colour-link" /></a>
          </div>
        </div>
        <div className="h-screen mb-16">
          <h2 className="text-colour-headings font-bold pt-10 sm:pt-32 mb-3" id="uk-far-right">UK far-right websites</h2>
          <p className="">The next graph is a map of UK far-right websites that I created while I was testing out my research methods. The analysis and write up on this project is pending.</p>
          {/* <object type="image/svg+xml" data="UKfarrightwebsites.svg"></object> */}
          <FullPageModal title="UK far-right websites" source="UKfarrightwebsites.svg" />
          <a className="justify-self-end" href="#mutual-degree"><FaArrowUp className="m-3 hover:text-colour-link" /></a>
        </div>
      </div>
    </div>
  )
}

export default page