import { useState } from 'react';
import useDebounce from '../utils/useDebounce';

import { IMainProps, ITypeCategory } from '../utils/Interfaces';

import Searcher from '../components/Searcher';
import Filter from '../components/Filter';
import List from '../layouts/List'

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

    const searchedContent = () => {
        return content.filter(
            content => {
                return content.title.en.toLowerCase().includes(debouncedValue[Debounce.DATA].toLowerCase()) || content.title.ua.toLowerCase().includes(debouncedValue[Debounce.DATA].toLowerCase())
            }
        )
    }

    const filteredContent = () => {
        return searchedContent().filter( 
            searchedContent => { 
                if (debouncedType[Debounce.DATA] === 0) return searchedContent
                if (types[debouncedType[Debounce.DATA]].en === searchedContent.type) return true
            }
        )
    }
    
    return (
        <div className='Main'>
            <div className='form'>
                <Searcher setValue={setValue} />
                <Filter activeType={activeType} setActiveType={setActiveType} types={types} />
            </div>
            {
                !debouncedValue[Debounce.ISSPINER] || !debouncedType[Debounce.ISSPINER]
                    ? <div style={{'display': 'flex', 'justifyContent': 'center', 'margin': '50px 0'}}><Spinner /></div> 
                    : <List content={filteredContent()}/>
            }
        </div>
    );
};

export default Main;