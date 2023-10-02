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
            ? <span><Spinner />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            : <button className={"en" === language ? `language-button selected` : 'language-button'} onClick={() => startTransitionEn(() => {
              setENLanguage()
            })}>en</button>
        }
        {
          isPendingUA 
            ? <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Spinner /></span>
            : <button className={"ua" === language ? `language-button selected` : 'language-button'} onClick={() => startTransitionUA(() => {
              setUALanguage()
            })}>ua</button>
        }
    </div>
  )
}
