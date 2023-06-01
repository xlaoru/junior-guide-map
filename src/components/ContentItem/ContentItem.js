import {useState} from 'react';
import {Card, Button} from 'react-bootstrap'
import AlertMessage from '../AlertMessage/AlertMessage';
import CarouselItem from '../CarouselItem/CarouselItem';
import ModalWindow from '../ModalWindow/ModalWindow';

import './ContentItem.css'

const ContentItem = ({image, caption, text, link, code, activeLanguage}) => {
    const [show, setShow] = useState(false)
    const [copied, showCopied] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)

    function onCopy(item) {
        Array.isArray(image) ? navigator.clipboard.writeText(item.code[activeIndex]) : navigator.clipboard.writeText(item.code)
        showCopied(true)
        setTimeout(() => {
            showCopied(false)
        }, 3000);
    }

    return (
        <div className='ContentItem'>
            <Card className="card-item">
                <div className="img-wrapper">
                    {Array.isArray(image) 
                        ? <CarouselItem imgs={image} setShow={setShow} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/> 
                        : <Card.Img variant="top" src={image} className="card-img" onClick={() => setShow(true)}/>
                    }
                </div>
                <Card.Body className='card-body'>
                    <Card.Title className='card-title'>{caption}</Card.Title>
                    <Card.Text className='card-text'>
                    {text}
                    </Card.Text>
                    <Button variant="primary" id='doc-button' className='card-button'><a href={link} target='_blank' className='doc-link'>{activeLanguage === 0 ? 'DOCUMENTAION' : 'ДОКУМЕНТАЦІЯ'}</a></Button>
                    <Button variant="primary" id='code-button' className='card-button' onClick={() => onCopy({code})}>{activeLanguage === 0 ? 'Copy Code' : 'Скопіювати Код'}</Button>
                </Card.Body>
            </Card>
            <div className="ModalWindow">
                <ModalWindow caption={caption} code={Array.isArray(code) ? code[activeIndex] : code} isShowed={show} setShow={setShow} /> 
            </div>
            <AlertMessage isCopied={copied} activeLanguage={activeLanguage}  />
        </div>
    );
};

export default ContentItem;