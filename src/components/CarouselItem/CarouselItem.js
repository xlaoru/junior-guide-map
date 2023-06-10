import {Carousel} from 'react-bootstrap'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './CarouselItem.css'

const CarouselItem = ({codes, type, activeIndex, setActiveIndex}) => {
  function handleSelect(selectedIndex) {
    setActiveIndex(selectedIndex)
  }

  return (
    <Carousel className='Carousel' onSelect={handleSelect} activeIndex={activeIndex} interval={null} controls={false} touch={false}>
      {codes.map(
        (code, index) => 
          <Carousel.Item 
            key={index}
          >
              <SyntaxHighlighter className="code-show-carousel" language={type === "React" ? "jsx" : "javascript"} style={ atomOneDark } customStyle={{padding: '25px'}}>{code}</SyntaxHighlighter>
          </Carousel.Item>
      )}
    </Carousel>
  )
}

export default CarouselItem