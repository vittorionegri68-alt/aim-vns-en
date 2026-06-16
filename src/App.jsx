// App.jsx — AI'm by VNS EN
import LangBanner from './components/LangBanner.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import SitiWeb from './components/SitiWeb.jsx'
import Results from './components/Results.jsx'
import Services from './components/Services-EN.jsx'
import FAQ from './components/FAQ.jsx'
import Blog from './components/Blog.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <LangBanner />
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <SitiWeb />
        <Results />
        <Services />
        <FAQ />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
