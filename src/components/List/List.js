import {Container, Row, Col} from 'react-bootstrap'
import ContentItem from '../ContentItem/ContentItem';

import './List.css'

const List = ({content, activeLanguage}) => {
    return (
        <Container className='List mt-5 mb-5'>
            <Row className='mt-5 mb-5'>
                {content.length === 0 ? <h2 className='error-caption'>{activeLanguage === 0 ? 'Nothing has found' : 'Нічого не знайдено'}</h2> : content.map((item, index) => <Col key={index} className='mt-2 mb-2'><ContentItem image={item.image} caption={activeLanguage === 0 ? item.caption.en : item.caption.ua} text={activeLanguage === 0 ? item.text.en : item.text.ua} link={activeLanguage === 0 ? item.link.en : item.link.ua} code={item.code} activeLanguage={activeLanguage}/></Col>)}
            </Row>
        </Container>
    );
};

export default List;