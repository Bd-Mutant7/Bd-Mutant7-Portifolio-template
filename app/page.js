
import Navbar from "../components/Navbar"
import TerminalHero from "../components/TerminalHero"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import PacketSniffer from "../components/PacketSniffer"
import ResumeGenerator from "../components/ResumeGenerator"
import GithubGraph from "../components/GithubGraph"
import Blog from "../components/Blog"
import Chatbot from "../components/Chatbot"
import Footer from "../components/Footer"

export default function Home(){
 return(
  <main>
   <Navbar/>
   <TerminalHero/>
   <Skills/>
   <Projects/>
   <PacketSniffer/>
   <ResumeGenerator/>
   <GithubGraph/>
   <Blog/>
   <Chatbot/>
   <Footer/>
  </main>
 )
}
