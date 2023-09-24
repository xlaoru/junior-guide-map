import getText from '../utils/getText';
import translation from '../assets/translation';

import {ISearcherProps} from "../utils/Interfaces"

export default function Searcher({value, setSearchParams}: ISearcherProps) {
  return (
    <input 
        className='searcher'
        type="text" 
        placeholder={getText(translation.main.searcher)}
        defaultValue={value}
        onChange={(event) => {
          setSearchParams((prev: any) => {
            prev.set("value", event.target.value);
            return prev;
          })
        }}
    />
  )
}