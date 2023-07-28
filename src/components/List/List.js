import {Container, Row, Col} from 'react-bootstrap'
import ContentItem from '../ContentItem/ContentItem';

import './List.css'

const List = ({content, activeLanguage}) => {
    return (
        <Container className='List mt-5 mb-5'>
            <Row className='mt-5 mb-5'>
                {content.length === 0 ? <h2 className='error-caption'>{activeLanguage === 0 ? 'Nothing has found' : 'Нічого не знайдено'}</h2> : content.map((item, index) => <Col key={index} className='mt-2 mb-2'><ContentItem data={item.data} title={activeLanguage === 0 ? item.title.en : item.title.ua} body={activeLanguage === 0 ? item.body.en : item.body.ua} link={activeLanguage === 0 ? item.link.en : item.link.ua} type={item.type} activeLanguage={activeLanguage}/></Col>)}
            </Row>
        </Container>
    );
};

export default List;