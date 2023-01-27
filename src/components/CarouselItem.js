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
    <Carousel onSelect={handleSelect} activeIndex={activeIndex} interval={null} style={{'width': '300px', 'height': '350px', 'display': 'flex', 'alingItem': 'center'}} >
      {imgs.map(
        (image, index) => 
          <Carousel.Item 
            key={image}
          >
              <img 
                style={{'maxWidth': '300px', 'maxHeight': 'auto', 'cursor': 'pointer'}}
                src={image}
                onClick={() => getImgData(index)}
              />
          </Carousel.Item>
      )}
    </Carousel>
  )
}

export default CarouselItem