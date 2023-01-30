import {useState} from 'react';
import {Card, Button} from 'react-bootstrap'
import AlertMessage from './AlertMessage';
import CarouselItem from './CarouselItem';
import ModalWindow from './ModalWindow';

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
                        : <Card.Img variant="top" src={image} className="card-img" onClick={() => setShow(true)} style={{'cursor': 'pointer'}}/>
                    }
                </div>
                <Card.Body className='card-body'>
                    <Card.Title className='card-title'>{caption}</Card.Title>
                    <Card.Text className='card-text'>
                    {text}
                    </Card.Text>
                    <Button variant="primary" style={{'padding': '0', 'background': 'rgb(140, 149, 156)', 'border': 'none'}} className='card-button'><a href={link} target='_blank' className='doc-link'>{activeLanguage === 0 ? 'DOCUMENTAION' : 'ДОКУМЕНТАЦІЯ'}</a></Button>
                    <Button variant="primary" style={{'padding': '10px', 'background': 'rgb(120, 120, 120)', 'border': 'none', 'marginTop' : '10px'}} className='card-button' onClick={() => onCopy({code})}>{activeLanguage === 0 ? 'Copy Code' : 'Скопіювати Код'}</Button>
                </Card.Body>
            </Card>
            <div className="ModalWindow">
                <ModalWindow caption={caption} image={Array.isArray(image) ? image[activeIndex] : image} isShowed={show} setShow={setShow} /> 
            </div>
            <AlertMessage isCopied={copied} activeLanguage={activeLanguage}  />
        </div>
    );
};

export default ContentItem;