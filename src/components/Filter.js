import React, { useState } from 'react';
import List from './List';

const Filter = ({content}) => {
    const [typeOfItem, setTypeOfItem] = useState('all')
    const [value, setValue] = useState('')

    const types = [
        {name: 'all', classname: 'clicked'},
        {name: 'method', classname: ''},
        {name: 'operator', classname: ''},
        {name: 'function', classname: ''},
        {name: 'cycle', classname: ''},
        {name: 'request', classname: ''},
        {name: 'exercise', classname: ''},
        {name: 'OOP', classname: ''},
    ]

    const [dataTypes] = useState([...types])

    const typeSearcherButtons = dataTypes.map(
        type => <button className={`type-bar ${type.classname}`} key={type.name} onClick={() => onTypeOfItem(type.name)}>{type.name}</button>
    )

    function onTypeOfItem(name) {
        setTypeOfItem(name)
        
        for (const type of dataTypes) {
            type.classname = ''
        }

        for (const type of dataTypes) {
            if (type.name === name) type.classname = 'clicked'
        }
    }

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