import {Carousel} from 'react-bootstrap'

import { ICarouselProps } from '../utils/Interfaces';

import {Light as SyntaxHighlighter} from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { memo } from 'react';

function CarouselItem ({data, setShow, activeIndex, setActiveIndex, setImgData}: ICarouselProps) {
  SyntaxHighlighter.registerLanguage('javascript', js)

  function handleSelect(selectedIndex: number) {
    setActiveIndex(selectedIndex)
  }

  return (
    <Carousel className='Carousel' onSelect={handleSelect} activeIndex={activeIndex} interval={null} touch={false}>
      {data.map((item: string, index: number) => 
        item.includes('/static/media/')
          ? <Carousel.Item className='CarouselItem' key={index} style={{'height': '350px', 'overflowY': 'scroll'}}><div className='image-wrapper'><img src={item} alt="Image" onClick={() => {setShow(true); setImgData(item)}} /></div></Carousel.Item>
          : <Carousel.Item key={index}><div className="code-wrapper"><SyntaxHighlighter style={monokai} className='code-show'>{item}</SyntaxHighlighter></div></Carousel.Item>
      )}
    </Carousel>
  )
}

export default memo(CarouselItem)