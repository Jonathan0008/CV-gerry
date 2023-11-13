// import { useEffect } from "react"
import Header from "./component/header"
import Hero from "./component/hero"
import About from "./component/about"
import Portfolio from "./component/portfolio"
// import AOS from "aos"
import Contact from "./component/contact"
import Footer from "./component/footer"
import Resume from "./component/resume"


function App() {
  // useEffect(() =>{
  //   AOS.init({
  //     duration: 1000,
  //     easing: "ease-in-out",
  //     once: true,
  //     mirror: false,
  //   })
  // })


  return (
    <>
    <Header />
    <Hero />
      <main id="main">
        <About />
        <Portfolio/>
        <Resume/>
        <Contact/>
      </main>
      
      <Footer/>
    </>
    
  )
}

export default App
