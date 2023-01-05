import {useState} from 'react';
import {Card, Button, Modal, ModalHeader} from 'react-bootstrap'

const ContentItem = ({image, caption, text, link, code}) => {
    function onCopy(item) {
        navigator.clipboard.writeText(item.code)
    }

    const [show, setShow] = useState(false)

    return (
        <div className='ContentItem'>
            <Card className="card-item">
                <div className="img-wrapper">
                    <Card.Img variant="top" src={image} className="card-img" onClick={() => setShow(true)} style={{'cursor': 'pointer'}}/>
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
                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                >
                    <ModalHeader closeButton/>
                    <Modal.Title style={{'textAlign': 'center', 'padding': '10px'}}>{caption}</Modal.Title>
                    <img style={{'padding': '10px'}} src={image}/>
                </Modal>
            </div>
        </div>
    );
};

export default ContentItem;