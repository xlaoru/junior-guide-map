import {useState} from 'react';
import {Card, Button} from 'react-bootstrap'
import CarouselItem from '../CarouselItem/CarouselItem';
import ModalWindow from '../ModalWindow/ModalWindow';

import './ContentItem.css'

const ContentItem = ({data, title, body, link, type, activeLanguage}) => {
    const [show, setShow] = useState(false)
    const [imgData, setImgData] = useState('')

    const [copied, showCopied] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)

    const onCopy = (item) => {
        Array.isArray(item.data) 
        ?  navigator.clipboard.writeText(
                item.data[activeIndex].includes('/static/media/') ? '' : item.data[activeIndex]
            )
        : navigator.clipboard.writeText(item.data.includes('/static/media/') ? '' : item.data)
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
                            <button onClick={() => onCopy({data})} style={{'background': 'transparent', 'color': 'white', 'border': 'none', 'display': 'flex', 'alignItems': 'center'}}>
                                <span style={{'display': 'flex', 'alignItems': 'center'}}>
                                    <ion-icon style={{'marginRight': '5px'}} name="clipboard-outline"></ion-icon>
                                </span>
                                Copy Code
                            </button>
                        )
                    }
                </div>
                {
                    Array.isArray(data) 
                        ? <div className="code-wrapper"><CarouselItem data={data} activeIndex={activeIndex} setActiveIndex={setActiveIndex} setShow={setShow} setImgData={setImgData}/></div> 
                        : data.includes('/static/media/') ? <img style={{'cursor': 'pointer'}} src={data} alt="Image" onClick={() => {setImgData(data); setShow(true)}}/> : <div className="code-wrapper"><pre className="code-show">{data}</pre></div>
                }
                <Card.Body className="card-body">
                    <Card.Title className='card-title'>{title}</Card.Title>
                    <Card.Text className='card-text'>
                    {body}
                    </Card.Text>
                    <Button variant="primary" id='doc-button' className='card-button'><a href={link} target='_blank' className='doc-link'>{activeLanguage === 0 ? 'DOCUMENTAION' : 'ДОКУМЕНТАЦІЯ'}</a></Button>
                </Card.Body>
            </Card>
            <div className="ModalWindow">
                <ModalWindow title={title} imgData={imgData} isShowed={show} setShow={setShow} /> 
            </div>
        </div>
    )    
};

export default ContentItem;