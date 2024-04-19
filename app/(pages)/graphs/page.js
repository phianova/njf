import Sidebar from '../../../components/Sidebar'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col min-h-screen mx-auto mt-10 sm:mt-32 lg:mt-40 md:text-3xl mb-32 w-10/12">
      <Sidebar />
      <div className="sm:mr-48 scroll-smooth">
        <h1 className="text-colour-headings text-3xl md:text-5xl font-bold">Graphs</h1>
        <p className="mt-10">The graphs here are massive scalable vector graphics (SVGs) that cannot be viewed meaningfully all at once on one screen.</p>
        <p id="full-data">Explore the page to view how some of the websites in my research connect to each other. If you zoom in you can see the individual domain names that appear in my research.</p>
        <div className="max-w-screen overflow-scroll">
          <h2 className="text-colour-headings font-bold mt-10 mb-3">Full data</h2>
          <p>This first image is a draft of my PhD data. The nodes in this graph are coloured by modularity, meaning that websites that are mostly connected to each other are the same colour.</p>
          <div className="overflow-scroll max-h-1/2 max-w-full">
            <object type="image/svg+xml" data="netlocationsfirstlook.svg"></object>
          </div>
        </div>
        <div>
          <h2 className="text-colour-headings font-bold mt-10 sm:pt-32 mb-3" id="mutual-degree">Mutual degree greater than 1</h2>
          <p>Below is another draft image. This time, only the websites with a mutual degree of at least 1 are shown. This means that the websites that are shown here are the websites that have reciprocal links with another website.
            <br></br>We can take from this that these websites are the most embedded in their networks. Interestingly, when you filter the graph like this, the websites that are left are some of the most extreme.</p>
          <object type="image/svg+xml" data="mutualdegree1.svg"></object>
        </div>
        <div>
          <h2 className="text-colour-headings font-bold mt-10 sm:pt-32 mb-3" id="uk-far-right">UK far-right websites</h2>
          <p className="mb-16">The next graph is a map of UK far-right websites that I created while I was testing out my research methods. The analysis and write up on this project is pending.</p>
          <object type="image/svg+xml" data="UKfarrightwebsites.svg"></object>
        </div>
      </div>
    </div>
  )
}

export default page