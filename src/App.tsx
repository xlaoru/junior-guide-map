import getText from './utils/getText';
import translation from './assets/translation';

import { useState } from "react"
import { Button } from "react-bootstrap"
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"

import content from "./assets/content"

import AboutUs from "./pages/AboutUs"
import Main from "./pages/Main"
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import LanguageFilter from "./layouts/LanguageFilter"
import ScrollToTopButton from './components/ScrollToTopButton';
function App() {
  const [activePage, setActivePage] = useState(0)
  const [language, setLanguage] = useState(window.localStorage.getItem('language') || 'en');

  const setENLanguage = () => {
  	window.localStorage.setItem("language", "en");
    setLanguage('en')
  }

  const setUALanguage = () => {
  	window.localStorage.setItem("language", "ua");
    setLanguage('ua')
  }

  return (
    <div className="App">
      <Router>
        <Header setActivePage={setActivePage}/>
        <div className="fullscreen-wrapper" style={activePage === 0 ? {'display': 'flex'} : {'display': 'none'}}>
          <div className="fullscreen-background">
            <span className='content-wrapper'>
              <h1 className='fullscreen_title'>{getText(translation.app.welocomeTitle)}</h1>
              <span style={{'marginTop': '25px'}}><a style={{'textDecoration': 'none', 'color': 'white'}} href="#main"><Button style={{'marginRight': '10px'}} variant="secondary">{getText(translation.app.getStartBtn)}</Button></a><NavLink style={{'display': 'contents'}} className="nav-link" to="/aboutus" onClick={() => setActivePage(1)}><Button variant="secondary">{getText(translation.app.aboutUsBtn)}</Button></NavLink></span>
            </span>
          </div>
        </div>
          <LanguageFilter activePage={activePage} language={language} setENLanguage={setENLanguage} setUALanguage={setUALanguage} />
        <Routes>
          <Route path="/" element={<Main content={content}/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
        </Routes>
      </Router>
      <ScrollToTopButton />
      <Footer/>
    </div>
  );
}

export default App
