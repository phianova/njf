import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col min-h-screen mx-auto mt-10 sm:mt-32 lg:mt-40 w-10/12">
      <h1 className="text-colour-headings text-3xl md:text-5xl font-bold">About me</h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1">
          <p className="mb-3">I am a third year Criminology PhD student at Swansea University.</p>
          <p className="my-3">I study gender in the online extreme right, and I do this by scraping and crawling extremist websites and analysing the textual content I find there.</p>
          <p className="my-3">My background is in Criminology, Psychology, and social research methods.</p>
          <p className="my-3">As part of my PhD research, I produce maps of these websites, some of which can be seen on the <a href="/graphs" className="underline decoration-dotted hover:text-colour-link">Graphs</a> page of this website.</p>
          <p className="my-3">I use Python to crawl and scrape these websites, and then I visualise the graphs created in Gephi.</p>
        </div>
      </div>
    </div>
  )
}

export default page