import { useState } from 'react';

import List from '../layouts/List'

import { IMainProps, ITypeCategory } from '../utils/Interfaces';

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

function Main({content, activeLanguage}: IMainProps) {
    const [activeType, setActiveType] = useState<number>(0)
    const [value, setValue] = useState<string>('')

    const typeSearcherButtons = types.map(
        (type, index) => 
            <button 
                className={activeType === index ? `type-bar clicked` : 'type-bar'} 
                key={type.en} 
                onClick={() => setActiveType(index)}
            >
                {activeLanguage === 0 ? type.en : type.ua}
            </button>
    )

    const typeSearchedContent = content.filter(
        content => { 
            if (activeType === 0) return content
            if (types[activeType].en === content.type) return true
        }
    )

    const filteredContent = typeSearchedContent.filter(
        typeSearchedContent => {
            return typeSearchedContent.title.en.toLowerCase().includes(value.toLowerCase()) || typeSearchedContent.title.ua.toLowerCase().includes(value.toLowerCase())
        }
    )

    return (
        <div className='Main'>
            <div className='form'>
                <input 
                    className='searcher'
                    type="text" 
                    placeholder={activeLanguage === 0 ? 'Search...' : 'Пошук...'}
                    onChange={(event) => setValue(event.target.value)} 
                />
                <div className="types-bar">
                    {typeSearcherButtons}
                </div>
            </div>
            <List content={filteredContent} activeLanguage={activeLanguage}/>
        </div>
    );
};

export default Main;