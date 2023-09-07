import { ILanguageFilterProps } from '../utils/Interfaces'

export default function LanguageFilter({activePage, language, setENLanguage, setUALanguage}: ILanguageFilterProps) {
  return (
    <div className="language-option" id='main' style={activePage === 1 ? {'marginTop': '3rem'} : {}}>
        <button className={"en" === language ? `language-button selected` : 'language-button'} onClick={() => setENLanguage()}>en</button>
        <button className={"ua" === language ? `language-button selected` : 'language-button'} onClick={() => setUALanguage()}>ua</button>
    </div>
  )
}