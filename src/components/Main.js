import React from 'react';
import Filter from './Filter';

const Main = ({content}) => {
    return (
        <div>
            <Filter content={content}/>
        </div>
    );
};

export default Main;