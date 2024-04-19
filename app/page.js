import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen mx-auto mt-10 sm:mt-32 lg:mt-40 w-10/12">
      <div className="text-colour-headings text-5xl font-bold flex flex-col sm:flex-row justify-center sm:justify-start">
        <p>Ninian</p>
        <span className="sm:w-3"></span>
        <p>James</p>
        <span className="sm:w-3"></span>
        <p>Frenguelli</p>
      </div>
      <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1">
          <p className="text-3xl md:text-4xl">Hello and thank you for checking out my online CV.</p>
          <p className="mt-3 text-3xl md:text-4xl">Here you will find my <a href="/cv" className="underline decoration-dotted hover:text-colour-link">formal CV</a>, my <a href="/publications" className="underline decoration-dotted hover:text-colour-link">publication history</a>, some information on the <a href="/research" className="underline decoration-dotted hover:text-colour-link">projects</a> I'm involved in, and some examples of the <a href="/graphs" className="underline decoration-dotted hover:text-colour-link">graphs</a> I have produced during my research.</p>
        </div>
      </div>
    </main>
  );
}
