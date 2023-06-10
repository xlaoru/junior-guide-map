import {Carousel} from 'react-bootstrap'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark  } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './CarouselItem.css'

const CarouselItem = ({codes, activeIndex, setActiveIndex}) => {
  function handleSelect(selectedIndex) {
    setActiveIndex(selectedIndex)
  }

  return (
    <Carousel className='Carousel' onSelect={handleSelect} activeIndex={activeIndex} interval={null} controls={false}>
      {codes.map(
        (code, index) => 
          <Carousel.Item 
            key={index}
          >
              <SyntaxHighlighter className="code-show" language="javascript" style={ dark }>{code}</SyntaxHighlighter>
          </Carousel.Item>
      )}
    </Carousel>
  )
}

export default CarouselItem