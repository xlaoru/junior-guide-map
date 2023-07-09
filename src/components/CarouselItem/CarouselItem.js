import {Carousel} from 'react-bootstrap'

import './CarouselItem.css'

const CarouselItem = ({media, codes, setShow, activeIndex, setActiveIndex}) => {
  function handleSelect(selectedIndex) {
    setActiveIndex(selectedIndex)
  }

  return (
    <Carousel className='Carousel' onSelect={handleSelect} activeIndex={activeIndex} interval={null} touch={false}>
      {media === undefined
        ? codes.map(
            (code, index) => 
              <Carousel.Item 
                key={index}
              >
                <pre className="code-show-carousel">{code}</pre>
              </Carousel.Item>
          )
        : media.map(
            (item, index) => 
              <Carousel.Item 
                key={index}
                style={{'overflow': 'scroll', 'height': '350px'}}
              >
                <div style={{'display': 'flex', 'justifyContent': 'center'}}>
                  <img onClick={() => setShow(true)} src={item} alt="" />
                </div>
              </Carousel.Item>
          )
      }
    </Carousel>
  )
}

export default CarouselItem