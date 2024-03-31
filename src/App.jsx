import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/header"
import Navbar from "./components/navbar"
import Container from "./components/container"
import Resume from "./components/resume"
import Big_dark_text_center from "./components/Big_dark_text_center"
import Service from './components/service'
import portfolio_section from "./components/portfolio_section"
// import Map from "./components/map"
import Footer from "./components/footer"




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Navbar/>
      <Container/>
      <Resume/>
      <Big_dark_text_center/>
      <Service/>  
      <portfolio_section/>
      {/* <map/> */}
      <Footer/>
    </>
  )
}

export default App
