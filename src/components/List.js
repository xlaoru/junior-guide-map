import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import ContentItem from './ContentItem';

const List = ({content}) => {
    return (
        <Container className='mt-5 mb-5'>
            <Row className='mt-5 mb-5'>
                {content.map((item, index) => <Col style={{'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'}}  key={index} className='mt-2 mb-2'><ContentItem image={item.image} caption={item.caption} text={item.text} link={item.link}/></Col>)}
            </Row>
        </Container>
    );
};

export default List;