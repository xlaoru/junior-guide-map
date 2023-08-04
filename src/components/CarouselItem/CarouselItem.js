import {Carousel} from 'react-bootstrap'

import './CarouselItem.css'

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import monokai from 'react-syntax-highlighter/dist/esm/styles/hljs/monokai';

SyntaxHighlighter.registerLanguage('javascript', js)

const CarouselItem = ({data, setShow, activeIndex, setActiveIndex, setImgData}) => {
  function handleSelect(selectedIndex) {
    setActiveIndex(selectedIndex)
  }

  return (
    <Carousel className='Carousel' onSelect={handleSelect} activeIndex={activeIndex} interval={null} touch={false}>
      {data.map((item, index) =>
        item.includes('/static/media/')
          ? <Carousel.Item key={index} style={{'overflow': 'scroll', 'height': '350px'}}><div className='image-wrapper'><img src={item} alt="Image" onClick={() => {setShow(true); setImgData(item)}} /></div></Carousel.Item>
          : <Carousel.Item key={index}><div className="code-wrapper"><SyntaxHighlighter style={monokai} className="code-show">{item}</SyntaxHighlighter></div></Carousel.Item>
      )}
    </Carousel>
  )
}

export default CarouselItem