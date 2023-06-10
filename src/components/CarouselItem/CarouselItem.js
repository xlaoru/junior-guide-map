import {Carousel} from 'react-bootstrap'

import './CarouselItem.css'

const CarouselItem = ({codes, setShow, activeIndex, setActiveIndex}) => {
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
              <pre className='code-show'>{code}</pre>
          </Carousel.Item>
      )}
    </Carousel>
  )
}

export default CarouselItem