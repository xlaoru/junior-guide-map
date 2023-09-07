import getText from '../utils/getText';
import translation from '../assets/translation';

import { useState } from 'react';

import List from '../layouts/List'

import { IMainProps, ITypeCategory } from '../utils/Interfaces';
import useDebounce from '../utils/useDebouce';
import Spinner from '../assets/Spinner';

const types: ITypeCategory[] = [
    {en: 'all', ua: 'усе'},
    {en: 'markup', ua: 'верстка'},
    {en: 'method', ua: 'методи'},
    {en: 'operator', ua: 'оператори'},
    {en: 'function', ua: 'функції'},
    {en: 'cycle', ua: 'цикли'},
    {en: 'request', ua: 'запити'},
    {en: 'task', ua: 'задачки'},
    {en: 'OOP', ua: 'ООП'},
    {en: 'React', ua: 'Реакт'},
    {en: 'Node.js', ua: 'Node.js'},
    {en: 'typescript', ua: 'typescript'},
]

enum Debounce {
    DATA,
    ISSPINER
}

function Main({content}: IMainProps) {
    const [activeType, setActiveType] = useState<number>(0)
    const [value, setValue] = useState<string>('')

    const debouncedValue = useDebounce<string>(value)
    const debouncedType = useDebounce<number>(activeType)

    const typeSearcherButtons = types.map(
        (type, index) => 
            <button 
                className={activeType === index ? `type-bar clicked` : 'type-bar'} 
                key={type.en} 
                onClick={() => setActiveType(index)}
            >
                {localStorage.getItem("language") === "en" ? type.en : type.ua}
            </button>
    )

    const filteredContent = content.filter(
        content => {
            return content.title.en.toLowerCase().includes(debouncedValue[Debounce.DATA].toLowerCase()) || content.title.ua.toLowerCase().includes(debouncedValue[Debounce.DATA].toLowerCase())
        }
    )

    const typeSearchedContent = filteredContent.filter( 
        filteredContent => { 
            if (debouncedType[Debounce.DATA] === 0) return filteredContent
            if (types[debouncedType[Debounce.DATA]].en === filteredContent.type) return true
        }
    )
    
    return (
        <div className='Main'>
            <div className='form'>
                <input 
                    className='searcher'
                    type="text" 
                    placeholder={getText(translation.main.searcher)}
                    onChange={(event) => setValue(event.target.value)} 
                />
                <div className="types-bar">
                    {typeSearcherButtons}
                </div>
            </div>
            {
                !debouncedValue[Debounce.ISSPINER] || !debouncedType[Debounce.ISSPINER]
                    ? <div style={{'display': 'flex', 'justifyContent': 'center', 'margin': '50px 0'}}><Spinner /></div> 
                    : <List content={typeSearchedContent}/>
            }
        </div>
    );
};

export default Main;