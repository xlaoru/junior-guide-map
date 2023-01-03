import React, { useState } from 'react';
import List from './List';

const types = [
    'all',
    'method',
    'operator',
    'function',
    'cycle',
    'request',
    'exercise',
    'OOP',
    'React Pattern'
]

const Filter = ({content}) => {
    const [activeType, setActiveType] = useState(0)
    const [value, setValue] = useState('')

    const typeSearcherButtons = types.map(
        (type, index) => 
            <button 
                className={activeType === index ? `type-bar clicked` : 'type-bar'} 
                key={type} 
                onClick={() => setActiveType(index)}
            >
                {type}
            </button>
    )

    const typeSearchedContent = content.filter(
        content => { 
            if (activeType === 0) return content
            if (types[activeType] === content.type) return true
        }
    )

    const filteredContent = typeSearchedContent.filter(
        typeSearchedContent => {
            return typeSearchedContent.caption.toLowerCase().includes(value.toLowerCase())
        }
    )

    return (
        <div className='Filter'>
            <div className='Form'>
                <input 
                        className='searcher'
                    type="text" 
                    placeholder='Search...'
                    onChange={(event) => setValue(event.target.value)} 
                />
                <div className="Types-bar">
                    {typeSearcherButtons}
                </div>
            </div>
            <List content={filteredContent}/>
        </div>
    );
};

export default Filter;