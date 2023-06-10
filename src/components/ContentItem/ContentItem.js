import {useState} from 'react';
import {Card, Button} from 'react-bootstrap'
import AlertMessage from '../AlertMessage/AlertMessage';
import CarouselItem from '../CarouselItem/CarouselItem';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark  } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './ContentItem.css'

const ContentItem = ({caption, text, link, code, activeLanguage}) => {
    const [copied, showCopied] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)

    function onCopy(item) {
        Array.isArray(code) ? navigator.clipboard.writeText(item.code[activeIndex]) : navigator.clipboard.writeText(item.code)
        showCopied(true)
        setTimeout(() => {
            showCopied(false)
        }, 3000);
    }

    return (
        <div className='ContentItem'>
            <Card style={{'borderRadius': '10px'}} className="card-item">
                <div className={Array.isArray(code) ? 'code-wrapper carousel' : "code-wrapper"}>
                    {Array.isArray(code) 
                        ? <CarouselItem codes={code} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/> 
                        : (<SyntaxHighlighter className="code-show" language="javascript" style={ dark }>{code}</SyntaxHighlighter>)
                    }
                </div>
                <Card.Body className="card-body">
                    <Card.Title className='card-title'>{caption}</Card.Title>
                    <Card.Text className='card-text'>
                    {text}
                    </Card.Text>
                    <Button variant="primary" id='doc-button' className='card-button'><a href={link} target='_blank' className='doc-link'>{activeLanguage === 0 ? 'DOCUMENTAION' : 'ДОКУМЕНТАЦІЯ'}</a></Button>
                    <Button variant="primary" id='code-button' className='card-button' onClick={() => onCopy({code})}>{activeLanguage === 0 ? 'Copy Code' : 'Скопіювати Код'}</Button>
                </Card.Body>
            </Card>
            <AlertMessage isCopied={copied} activeLanguage={activeLanguage}  />
        </div>
    );
};

export default ContentItem;