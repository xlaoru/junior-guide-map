import {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import ContentItem from './ContentItem';

const List = ({content}) => {
    const [language, setLanguage] = useState('ua')

    const languages = [
        {name: 'ua',classname: 'selected'},
        {name: 'en', classname: ''}
    ]

    const [dataLanguages] = useState([...languages])
    
    const languageChooserButtons = dataLanguages.map(
        language => <button className={`language-button ${language.classname}`} key={language.name} onClick={() => onLanguageChoose(language.name)}>{language.name}</button>
    )
    
    function onLanguageChoose(name) {
        setLanguage(name)

        for (const language of dataLanguages) {
            language.classname = ''
        }

        for (const language of dataLanguages) {
            if (language.name === name) language.classname = 'selected'
        }
    }

    return (
        <Container className='mt-5 mb-5'>
                <div className='languageOption'>
                    {languageChooserButtons}
                </div>
            <Row className='mt-5 mb-5'>
                {content.length === 0 ? <h2 className='error-caption'>Nothing has found</h2> : content.map((item, index) => <Col style={{'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'}}  key={index} className='mt-2 mb-2'><ContentItem image={item.image} caption={item.caption} text={language === 'ua' ? item.text.ua : item.text.en} link={item.link} code={item.code}/></Col>)}
            </Row>
        </Container>
    );
};

export default List;