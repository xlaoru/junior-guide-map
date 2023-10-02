import { useTransition } from "react"
import { ILanguageFilterProps } from '../utils/Interfaces'

import { Spinner } from "react-bootstrap";

export default function LanguageFilter({activePage, language, setENLanguage, setUALanguage}: ILanguageFilterProps) {
  const [isPendingEN, startTransitionEn] = useTransition();
  const [isPendingUA, startTransitionUA] = useTransition();
  return (
    <div className="language-option" id='main' style={activePage === 1 ? {'marginTop': '3rem'} : {}}>
        {
          isPendingEN 
            ? <span style={{marginRight: '25px'}}><Spinner /></span>
            : isPendingUA
              ? <button className='language-button'>en</button>
              : <button className={language === "en" ? 'language-button selected' : 'language-button'} onClick={() => startTransitionEn(() => {setENLanguage()})}>en</button>
        }
        {
          isPendingUA 
            ? <span style={{marginLeft: '25px'}}><Spinner /></span>
            : isPendingEN 
              ? <button className='language-button'>ua</button>
              : <button className={language === "ua" ? 'language-button selected' : 'language-button'} onClick={() => startTransitionUA(() => {setUALanguage()})}>ua</button>
        }
    </div>
  )
}
