import {useState} from 'react';
import {Card, Button} from 'react-bootstrap'
import CarouselItem from '../components/CarouselItem';
import ModalWindow from '../components/ModalWindow';

import { IContentItemProps, IItemProp } from '../utils/Interfaces';

function ContentItem ({data, title, body, link, type, activeLanguage}: IContentItemProps) {
    const [show, setShow] = useState(false)
    const [imgData, setImgData] = useState('')

    const [copied, showCopied] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)

    const onCopy = (item: IItemProp) => {
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

    const renderContent = (data: string | string[]) => {
        if (Array.isArray(data)) {
            return (
                <div className="code-wrapper">
                    <CarouselItem data={data} activeIndex={activeIndex} setActiveIndex={setActiveIndex} setShow={setShow} setImgData={setImgData}/>
                </div>
            )
        }

        if (data.includes('/static/media/')) {
            return (
                <img style={{'cursor': 'pointer'}} src={data} alt="Image" onClick={() => {setImgData(data); setShow(true)}}/>
            )
        }

        return (
            <div className="code-wrapper">
                <div>
                    <pre className="code-show">
                        {data}
                    </pre>
                </div>
            </div>
        )
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
                                </span>
                                Copied
                            </button>
                        )
                        : (
                            <button onClick={() => onCopy({data})} style={{'background': 'transparent', 'color': 'white', 'border': 'none', 'display': 'flex', 'alignItems': 'center'}}>
                                <span style={{'display': 'flex', 'alignItems': 'center'}}>
                                </span>
                                Copy Code
                            </button>
                        )
                    }
                </div>
                {renderContent(data)}
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