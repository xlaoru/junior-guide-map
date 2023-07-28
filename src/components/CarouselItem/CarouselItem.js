import {Carousel} from 'react-bootstrap'

import './CarouselItem.css'

const CarouselItem = ({data, setShow, activeIndex, setActiveIndex}) => {
  function handleSelect(selectedIndex) {
    setActiveIndex(selectedIndex)
  }

  return (
    <Carousel className='Carousel' onSelect={handleSelect} activeIndex={activeIndex} interval={null} touch={false}>
      {data.map((item, index) =>
        item.includes('/static/media/')
          ? <Carousel.Item key={index} style={{'overflow': 'scroll', 'height': '350px'}}><img src={item} alt="Image" /></Carousel.Item>
          : <Carousel.Item key={index}><div className="code-wrapper"><pre className="code-show">{item}</pre></div></Carousel.Item>
      )}
    </Carousel>
  )
}

export default CarouselItem