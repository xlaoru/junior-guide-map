import {useState} from 'react';
import {Card, Button} from 'react-bootstrap'
import CarouselItem from '../CarouselItem/CarouselItem';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark  } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './ContentItem.css'

const ContentItem = ({caption, text, link, code, type, activeLanguage}) => {
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
                <div style={{'display': 'flex', 'justifyContent': 'space-between', 'background': 'rgb(140, 149, 156)', 'padding': '2.5px 7.5px', 'borderRadius': '10px 10px 0 0'}}>
                    <p style={{'margin': '0', 'color': 'white'}}>{type.toUpperCase()}</p>
                    {
                        copied 
                        ? (
                            <button style={{'background': 'transparent', 'color': 'white', 'border': 'none', 'display': 'flex', 'alignItems': 'center'}}>
                                <span style={{'display': 'flex', 'justifyContent': 'center'}}>
                                    <ion-icon style={{'marginRight': '5px'}} name="checkmark-sharp"></ion-icon>
                                </span>
                                Copied
                            </button>
                        )
                        : (
                            <button onClick={() => onCopy({code})} style={{'background': 'transparent', 'color': 'white', 'border': 'none', 'display': 'flex', 'alignItems': 'center'}}>
                                <span style={{'display': 'flex', 'alignItems': 'center'}}>
                                    <ion-icon style={{'marginRight': '5px'}} name="clipboard-outline"></ion-icon>
                                </span>
                                Copy Text
                            </button>
                        )
                    }
                </div>
                <div className="code-wrapper">
                    {Array.isArray(code) 
                        ? <CarouselItem codes={code} type={type} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/> 
                        : (<SyntaxHighlighter className="code-show" language={type === "React" ? "jsx" : "javascript"} style={ atomOneDark } customStyle={{padding: '25px'}}>{code}</SyntaxHighlighter>)
                    }
                </div>
                <Card.Body className="card-body">
                    <Card.Title className='card-title'>{caption}</Card.Title>
                    <Card.Text className='card-text'>
                    {text}
                    </Card.Text>
                    <Button variant="primary" id='doc-button' className='card-button'><a href={link} target='_blank' className='doc-link'>{activeLanguage === 0 ? 'DOCUMENTAION' : 'ДОКУМЕНТАЦІЯ'}</a></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ContentItem;