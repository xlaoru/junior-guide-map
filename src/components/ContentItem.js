import React from 'react';
import {Card, Button} from 'react-bootstrap'

const ContentItem = ({image, caption, text, link, code}) => {
    function onCopy(item) {
        navigator.clipboard.writeText(item.code)
    }

    return (
        <div>
            <Card className="card-item">
                <div className="img-wrapper">
                    <Card.Img variant="top" src={image} className="card-img" />
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
        </div>
    );
};

export default ContentItem;