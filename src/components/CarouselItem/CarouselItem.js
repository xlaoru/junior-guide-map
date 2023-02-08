import {Carousel} from 'react-bootstrap'

import './CarouselItem.css'

const CarouselItem = ({imgs, setShow, activeIndex, setActiveIndex}) => {
  function getImgData(index) {
    setShow(true)
    setActiveIndex(index)
  }

  function handleSelect(selectedIndex) {
    setActiveIndex(selectedIndex)
  }

  return (
    <Carousel className='Carousel' onSelect={handleSelect} activeIndex={activeIndex} interval={null}>
      {imgs.map(
        (image, index) => 
          <Carousel.Item 
            key={image}
          >
              <img 
                src={image}
                onClick={() => getImgData(index)}
              />
          </Carousel.Item>
      )}
    </Carousel>
  )
}

export default CarouselItem