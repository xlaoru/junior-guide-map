import React, { useState } from 'react';
import List from './List';

const Filter = ({content}) => {
    const [typeOfItem, setTypeOfItem] = useState('all')
    const [value, setValue] = useState('')

    const types = [
        {name: 'all'},
        {name: 'method'},
        {name: 'operator'},
        {name: 'function'},
        {name: 'cycle'},
        {name: 'request'},
        {name: 'exercise'},
        {name: 'OOP'},
    ]

    const typeSearcherButtons = types.map(
        type => <button className='type-bar' key={type.name} onClick={() => setTypeOfItem(type.name)}>{type.name}</button> 
    )

    const typeSearchedContent = content.filter(
        content => { 
            if (typeOfItem === 'all') return content
            if (typeOfItem === content.type) return true
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
                <form action="">
                    <input 
                        className='searcher'
                        type="text" 
                        placeholder='Search...'
                        onChange={(event) => setValue(event.target.value)} 
                    />
                </form>
                <div className='Types-bar'>
                    {typeSearcherButtons}
                </div>
            </div>
            <List content={filteredContent}/>
        </div>
    );
};

export default Filter;