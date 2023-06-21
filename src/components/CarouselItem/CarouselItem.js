import {Carousel} from 'react-bootstrap'

import './CarouselItem.css'

const CarouselItem = ({codes, type, activeIndex, setActiveIndex}) => {
  function handleSelect(selectedIndex) {
    setActiveIndex(selectedIndex)
  }

  return (
    <Carousel className='Carousel' onSelect={handleSelect} activeIndex={activeIndex} interval={null}/*  controls={false} */ touch={false}>
      {codes.map(
        (code, index) => 
          <Carousel.Item 
            key={index}
          >
              <pre className="code-show-carousel">{code}</pre>
          </Carousel.Item>
      )}
    </Carousel>
  )
}

export default CarouselItem