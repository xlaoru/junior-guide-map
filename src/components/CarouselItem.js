import {Carousel} from 'react-bootstrap'

const CarouselItem = ({imgs, setShow, activeIndex, setActiveIndex}) => {
  function getImgData(index) {
    setShow(true)
    setActiveIndex(index)
  }

  function handleSelect(selectedIndex) {
    setActiveIndex(selectedIndex)
  }

  return (
    <Carousel onSelect={handleSelect} activeIndex={activeIndex} interval={null} style={{'width': '300px', 'height': '350px'}} >
      {imgs.map(
        (image, index) => 
          <Carousel.Item 
            key={image}>
              <img 
                style={{'width': '300px', 'height': '350px', 'cursor': 'pointer'}}
                src={image}
                onClick={() => getImgData(index)}
              />
          </Carousel.Item>
      )}
    </Carousel>
  )
}

export default CarouselItem