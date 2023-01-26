import {useState} from 'react';
import {Card, Button} from 'react-bootstrap'
import AlertMessage from './AlertMessage';
import CarouselItem from './CarouselItem';
import ModalWindow from './ModalWindow';

const ContentItem = ({image, caption, text, link, code}) => {
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
                    <Button variant="primary" style={{'padding': '0', 'background': 'rgb(140, 149, 156)', 'border': 'none'}} className='card-button'><a href={link} target='_blank' className='doc-link'>DOCUMENTAION</a></Button>
                    <Button variant="primary" style={{'padding': '10px', 'background': 'rgb(120, 120, 120)', 'border': 'none', 'marginTop' : '10px'}} className='card-button' onClick={() => onCopy({code})}>Copy Code</Button>
                </Card.Body>
            </Card>
            <div className="ModalWindow">
                {Array.isArray(image) 
                    ? <ModalWindow caption={caption} image={image[activeIndex]} isShowed={show} setShow={setShow} /> 
                    : <ModalWindow caption={caption} image={image} isShowed={show} setShow={setShow} />
                }
            </div>
            <AlertMessage isCopied={copied} />
        </div>
    );
};

export default ContentItem;