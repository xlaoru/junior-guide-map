import React from 'react';
import {Card, Button} from 'react-bootstrap'

const ContentItem = ({image, caption, text, link}) => {
    return (
        <div>
            <Card style={{ width: '18rem', 'height': '550px'}}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{caption}</Card.Title>
                    <Card.Text>
                    {text}
                    </Card.Text>
                    <Button variant="primary"><a style={{'color': 'white', 'textDecoration': 'none'}} href={link}>DOCUMENTAION</a></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ContentItem;