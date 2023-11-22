import getText from '../utils/getText';
import translation from '../assets/translation';

import {memo} from 'react'

import {Container, Row, Col} from 'react-bootstrap'
import ContentItem from '../components/ContentItem';

import { IContentItem, IListProps } from '../utils/models';

const List = memo(({value, content}: IListProps) => {
    return (
        <Container className='List mt-5 mb-5'>
            <Row className='mt-5 mb-5'>
                {content?.length === 0 
                    ? <h2 className='error-caption'>{getText(translation.list.error)}</h2> 
                    : content.map((item: IContentItem, index: number) => <Col key={index} className='mt-2 mb-2'><ContentItem value={value} data={item.data} title={localStorage.getItem("language") === "en" 
                        ? item.title.en : item.title.ua} body={localStorage.getItem("language") === "en" ? item.body.en : item.body.ua} link={localStorage.getItem("language") === "en" ? item.link.en 
                        : item.link.ua} type={Array.isArray(item.type) ? item.type.join(', ') : item.type}/></Col>)
                }
            </Row>
        </Container>
    );
})

export default List;