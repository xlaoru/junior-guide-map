import getText from '../utils/getText';
import translation from '../assets/translation';

import {ISearcherProps} from "../utils/Interfaces"

export default function Searcher({setValue}: ISearcherProps) {
  return (
    <input 
        className='searcher'
        type="text" 
        placeholder={getText(translation.main.searcher)}
        onChange={(event) => setValue(event.target.value)} 
    />
  )
}