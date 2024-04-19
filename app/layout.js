import { Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";


export const metadata = {
  title: "Ninian James Frenguelli",
  description: "Online CV of Ninian James Frenguelli",
};

const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"], weight: ["400", "700"]
})
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={atkinson.className + " bg-colour-bg text-colour-text text-2xl scroll-smooth"}>
        <MobileMenu />
        <Navbar />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
