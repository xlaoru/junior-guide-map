import {useState} from 'react';

import './App.css';
import Main from '../Main/Main';
import AboutUs from '../AboutUs/AboutUs';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import {Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import ScrollToTop from "react-scroll-to-top";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import content from '../../content/content';

const languages = [
  'en',
  'ua'
]

function App() {
  const [activePage, setActivePage] = useState(0)
  const [activeLanguage, setActiveLanguage] = useState(0)
    
  const languageButtons = languages.map(
    (language, index) => 
        <button 
            className={activeLanguage === index ? `language-button selected` : 'language-button'} 
            key={language} 
            onClick={() => setActiveLanguage(index)}
        >
            {language}
        </button>
  )
  return (
    <div className="App">
      <Router>
        <Header setActivePage={setActivePage} activeLanguage={activeLanguage}/>
        <div className="fullscreen-wrapper" style={activePage === 0 ? {'display': 'flex'} : {'display': 'none'}}>
          <div className="fullscreen-background">
            <span className='content-wrapper'>
              <h1 className='fullscreen_title'>{activeLanguage === 0 ? (<span>Welcome To The <span style={{'color': 'rgb(230, 192, 123)'}}>Code</span> Zone</span>) : (<span>Ласкаво Просимо До Зони <span style={{'color': 'rgb(230, 192, 123)'}}>Коду</span> </span>)}</h1>
              <span style={{'marginTop': '25px'}}><a style={{'textDecoration': 'none', 'color': 'white'}} href="#main"><Button style={{'marginRight': '10px'}} variant="secondary">{activeLanguage === 0 ? 'Get Started' : 'Почнемо'}</Button></a><NavLink style={{'display': 'contents'}} className="nav-link" to="/aboutus" onClick={() => setActivePage(1)}><Button variant="secondary">{activeLanguage === 0 ? 'About Us' : 'Про Нас'}</Button></NavLink></span>
            </span>
          </div>
        </div>
          <div className="language-option" id='main' style={activePage === 1 ? {'marginTop': '3rem'} : {}}>
            {languageButtons}
          </div>
        <Routes>
          <Route exact path="/" element={<Main content={content} activeLanguage={activeLanguage}/>}/>
          <Route path="/aboutus" element={<AboutUs activeLanguage={activeLanguage}/>}/>
        </Routes>
      </Router>
      <ScrollToTop
       smooth
       viewBox="0 0 32 32"
       svgPath="M17.504 26.025l.001-14.287 6.366 6.367L26 15.979 15.997 5.975 6 15.971 8.129 18.1l6.366-6.368v14.291z" 
      />
      <Footer activeLanguage={activeLanguage}/>
    </div>
  );
}

export default App;