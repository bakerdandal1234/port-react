import Hero from "./components/2-hero/Hero"
import Header from "./components/1-header/Header"
import Main from "./components/3-main/Main"
import Contact from "./components/4-contact/Contact"
import Footer from "./components/footer/Footer"
import { useEffect, useState } from "react"


function App() {
const[showscrollBTN,setshowscrollBTN]=useState(false);
useEffect(() => {
  window.addEventListener("scroll",() => {
    // if(window.scrollY>100){
    //   setshowscrollBTN(true)
    // }else{
    //   setshowscrollBTN(false)
    // }
    {window.scrollY>100? setshowscrollBTN(true): setshowscrollBTN(false)}
  
  })
},[]);
  return (
    <div className="container">
    <Header/>
    <div className="divider"/>
    <Hero/>
    <div className="divider"/>
    <Main/>
    <div className="divider"/>
    <Contact/>
    <div className="divider"/>
    <Footer/>
  
      <a style={{opacity:showscrollBTN?1:0,transition:"1s"}} href="#top">
      <button  className="scroll2top icon-arrow-up"></button>
  </a>

  
    </div>
  )
}

export default App
