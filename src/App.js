import React, { useEffect, useState } from 'react'
import './Reset.css'
import './App.css'
// import splash from './welcomePage.png'

const App = () => {

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);
 
  let nav = document.getElementById('nav')
  let navPlaceholder = document.getElementById('navPlaceholder')

  offset > 0 ? nav.classList.add('navIsMoving') : nav.classList.remove('navIsMoving')
  offset > 0 ? navPlaceholder.classList.remove('hidden') : navPlaceholder.classList.add('hidden')

  return (
      <div className="App">
        <div className="welcomePage posAbsolute">
          <div id="navPlaceholder" className="hidden"></div>
          <nav id="nav" className="headerNav">
            <div className="navBox1 flex jcEnd">
              <img id="homeLogo" className="btn" src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg" alt="" />
            </div>
            <div className="navBox2 flex jcCenter">
              <div className="linkBox flex jcSpaceAround">
                <h3 className="navLink btn">SERVICES</h3>
                <h3 className="navLink btn">PORTFOLIO</h3>
                <h3 className="navLink btn">ABOUT</h3>
                <h3 className="navLink btn">TEAM</h3>
                <h3 className="navLink btn">CONTACT</h3>
              </div>
            </div>
          </nav>
          <div className="welcomeContent">
            <h3>Welcome To Our Studio</h3>
            <h2>IT'S NICE TO MEET YOU</h2>
            <button className="btn">TELL ME MORE</button>
          </div>

        </div>
      
      <div className="servicesPage">
        <h1>Services</h1>
      </div>
    </div>
  )
}

export default App
