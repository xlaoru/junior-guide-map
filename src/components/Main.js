import React from 'react';
import List from './List';

const Main = ({content}) => {
    return (
        <div>
            {/* Search */}
            {/* Filter */}
            <List content={content}/>
        </div>
    );
};

export default Main;