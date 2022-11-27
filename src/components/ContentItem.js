import React from 'react';
import {Card, Button} from 'react-bootstrap'
import './ContentItem.css'

const ContentItem = ({image, caption, text, link}) => {
    return (
        <div>
            <Card className="card-item">
                <Card.Img variant="top" src={image} className="card-img" />
                <Card.Body className='card-body'>
                    <Card.Title className='card-title'>{caption}</Card.Title>
                    <Card.Text className='card-text'>
                    {text}
                    </Card.Text>
                    <Button variant="primary" style={{'padding': '0', 'background': 'rgb(140, 149, 156)', 'border': 'none'}} className='card-button'><a href={link} target='_blank' className='doc-link'>DOCUMENTAION</a></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ContentItem;