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
          <LanguageFilter activePage={activePage} language={language} setENLanguage={setENLanguage} setUALanguage={setUALanguage} />
        <Routes>
          <Route path="/" element={<Main content={content}/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App
