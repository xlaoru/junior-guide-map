import getText from '../utils/getText';
import translation from '../assets/translation';

import {memo, useState} from 'react';
import {Card, Button} from 'react-bootstrap'
import CarouselItem from '../components/CarouselItem';
import ModalWindow from '../components/ModalWindow';

import { IContentItemProps, IItemProp } from '../utils/models';

import {Light as SyntaxHighlighter} from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function ContentItem ({value, data, title, body, link, type}: IContentItemProps) {
    SyntaxHighlighter.registerLanguage('javascript', js)

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
                <div style={{ height: '350px', overflowY: 'scroll' }}>
                    <img style={{'cursor': 'pointer'}} src={data} alt="Image" onClick={() => {setImgData(data); setShow(true)}}/>
                </div>
            )
        }

        return (
            <div>
              <SyntaxHighlighter style={monokai} className="code-show">
                {data}
              </SyntaxHighlighter>
            </div>
        );
    }

    const renderTitle = () => {
        return (
            <span>
                {title.split('').map((item, index) => (
                    <span
                        style={value.toLowerCase().includes(item.toLowerCase()) ? { backgroundColor: 'rgba(255,255,0,0.5)' } : {}}
                        key={index}
                    >
                        {item}
                    </span>
                ))}
            </span>
        );
    }

    const renderBody = () => {
        return (
            <span>
                {body.split('').map((item, index) => (
                    <span
                        style={value.toLowerCase().includes(item.toLowerCase()) ? { backgroundColor: 'rgba(255,255,0,0.5)' } : {}}
                        key={index}
                    >
                        {item}
                    </span>
                ))}
            </span>
        );
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
                                <span style={{'display': 'flex', 'justifyContent': 'center', 'marginTop': '1px', 'marginRight': '2.5px'}}>
                                    <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 2V1H10V2H5ZM4.75 0C4.33579 0 4 0.335786 4 0.75V1H3.5C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H7V13H3.5C3.22386 13 3 12.7761 3 12.5V2.5C3 2.22386 3.22386 2 3.5 2H4V2.25C4 2.66421 4.33579 3 4.75 3H10.25C10.6642 3 11 2.66421 11 2.25V2H11.5C11.7761 2 12 2.22386 12 2.5V7H13V2.5C13 1.67157 12.3284 1 11.5 1H11V0.75C11 0.335786 10.6642 0 10.25 0H4.75ZM9 8.5C9 8.77614 8.77614 9 8.5 9C8.22386 9 8 8.77614 8 8.5C8 8.22386 8.22386 8 8.5 8C8.77614 8 9 8.22386 9 8.5ZM10.5 9C10.7761 9 11 8.77614 11 8.5C11 8.22386 10.7761 8 10.5 8C10.2239 8 10 8.22386 10 8.5C10 8.77614 10.2239 9 10.5 9ZM13 8.5C13 8.77614 12.7761 9 12.5 9C12.2239 9 12 8.77614 12 8.5C12 8.22386 12.2239 8 12.5 8C12.7761 8 13 8.22386 13 8.5ZM14.5 9C14.7761 9 15 8.77614 15 8.5C15 8.22386 14.7761 8 14.5 8C14.2239 8 14 8.22386 14 8.5C14 8.77614 14.2239 9 14.5 9ZM15 10.5C15 10.7761 14.7761 11 14.5 11C14.2239 11 14 10.7761 14 10.5C14 10.2239 14.2239 10 14.5 10C14.7761 10 15 10.2239 15 10.5ZM14.5 13C14.7761 13 15 12.7761 15 12.5C15 12.2239 14.7761 12 14.5 12C14.2239 12 14 12.2239 14 12.5C14 12.7761 14.2239 13 14.5 13ZM14.5 15C14.7761 15 15 14.7761 15 14.5C15 14.2239 14.7761 14 14.5 14C14.2239 14 14 14.2239 14 14.5C14 14.7761 14.2239 15 14.5 15ZM8.5 11C8.77614 11 9 10.7761 9 10.5C9 10.2239 8.77614 10 8.5 10C8.22386 10 8 10.2239 8 10.5C8 10.7761 8.22386 11 8.5 11ZM9 12.5C9 12.7761 8.77614 13 8.5 13C8.22386 13 8 12.7761 8 12.5C8 12.2239 8.22386 12 8.5 12C8.77614 12 9 12.2239 9 12.5ZM8.5 15C8.77614 15 9 14.7761 9 14.5C9 14.2239 8.77614 14 8.5 14C8.22386 14 8 14.2239 8 14.5C8 14.7761 8.22386 15 8.5 15ZM11 14.5C11 14.7761 10.7761 15 10.5 15C10.2239 15 10 14.7761 10 14.5C10 14.2239 10.2239 14 10.5 14C10.7761 14 11 14.2239 11 14.5ZM12.5 15C12.7761 15 13 14.7761 13 14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5C12 14.7761 12.2239 15 12.5 15Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                                </span>
                                {getText(translation.contentItem.copyAfter)}
                            </button>
                        )
                        : (
                            <button onClick={() => onCopy({data})} style={{'background': 'transparent', 'color': 'white', 'border': 'none', 'display': 'flex', 'alignItems': 'center'}}>
                                <span style={{'display': 'flex', 'alignItems': 'center', 'marginTop': '1px', 'marginRight': '2.5px'}}>
                                    <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 2V1H10V2H5ZM4.75 0C4.33579 0 4 0.335786 4 0.75V1H3.5C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V2.5C13 1.67157 12.3284 1 11.5 1H11V0.75C11 0.335786 10.6642 0 10.25 0H4.75ZM11 2V2.25C11 2.66421 10.6642 3 10.25 3H4.75C4.33579 3 4 2.66421 4 2.25V2H3.5C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V2.5C12 2.22386 11.7761 2 11.5 2H11Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                                </span>
                                {getText(translation.contentItem.copyBefore)}
                            </button>
                        )
                    }
                </div>
                {renderContent(data)}
                <Card.Body className="card-body">
                    <Card.Title className='card-title'>{renderTitle()}</Card.Title>
                    <Card.Text className='card-text'>
                        {renderBody()}
                    </Card.Text>
                    <Button variant="primary" id='doc-button' className='card-button'><a href={link} target='_blank' className='doc-link'>{getText(translation.contentItem.documentation)}</a></Button>
                </Card.Body>
            </Card>
            <div className="ModalWindow">
                <ModalWindow title={title} imgData={imgData} isShowed={show} setShow={setShow} /> 
            </div>
        </div>
    )    
};

export default memo(ContentItem);