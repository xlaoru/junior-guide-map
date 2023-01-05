import {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import ContentItem from './ContentItem';

const languages = [
    'ua',
    'en'
]

const List = ({content}) => {
    const [activeLanguage, setActiveLanguage] = useState(0)
    
    const languageChooserButtons = languages.map(
        (language, index) => 
            <button 
                className={activeLanguage === index ? `language-button selected` : 'language-button'} 
                key={language} 
                onClick={() => setActiveLanguage(index)}
            >
                {language}
            </button>
    )
    
    return (
        <Container className='List mt-5 mb-5'>
                <div className='languageOption'>
                    {languageChooserButtons}
                </div>
            <Row className='mt-5 mb-5'>
                {content.length === 0 ? <h2 className='error-caption'>Nothing has found</h2> : content.map((item, index) => <Col style={{'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'}}  key={index} className='mt-2 mb-2'><ContentItem image={item.image} caption={item.caption} text={activeLanguage === 0 ? item.text.ua : item.text.en} link={item.link} code={item.code}/></Col>)}
            </Row>
        </Container>
    );
};

export default List;