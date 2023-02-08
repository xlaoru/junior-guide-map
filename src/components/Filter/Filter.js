import React, { useState } from 'react';
import List from '../List/List'

import './Filter.css'

const types = [
    {en: 'all', ua: 'усе'},
    {en: 'method', ua: 'метод'},
    {en: 'operator', ua: 'оператор'},
    {en: 'function', ua: 'функція'},
    {en: 'cycle', ua: 'цикл'},
    {en: 'request', ua: 'запит'},
    {en: 'exercise', ua: 'задачка'},
    {en: 'OOP', ua: 'ООП'},
    {en: 'React', ua: 'Реакт'},
]

const Filter = ({content, activeLanguage}) => {
    const [activeType, setActiveType] = useState(0)
    const [value, setValue] = useState('')

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
            if (activeLanguage === 0) return typeSearchedContent.caption.en.toLowerCase().includes(value.toLowerCase())
            else return typeSearchedContent.caption.ua.toLowerCase().includes(value.toLowerCase())
        }
    )

    return (
        <div className='Filter'>
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

export default Filter;