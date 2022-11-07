import React, { useState } from 'react';
import List from './List';

const Filter = ({content}) => {
    const [value, setValue] = useState('')

    const filteredContent = content.filter(
        content => {
            return content.caption.toLowerCase().includes(value.toLowerCase())
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
            </div>
            <List content={filteredContent}/>
        </div>
    );
};

export default Filter;