import {Carousel} from 'react-bootstrap'

import { ICarouselProps } from '../utils/Interfaces';

function CarouselItem ({data, setShow, activeIndex, setActiveIndex, setImgData}: ICarouselProps) {
  function handleSelect(selectedIndex: number) {
    setActiveIndex(selectedIndex)
  }

  return (
    <Carousel className='Carousel' onSelect={handleSelect} activeIndex={activeIndex} interval={null} touch={false}>
      {data.map((item: string, index: number) => 
        item.includes('/static/media/')
          ? <Carousel.Item className='CarouselItem' key={index} style={{'height': '350px', 'overflowY': 'scroll'}}><div className='image-wrapper'><img src={item} alt="Image" onClick={() => {setShow(true); setImgData(item)}} /></div></Carousel.Item>
          : <Carousel.Item key={index}><div className="code-wrapper"><pre className='code-show'>{item}</pre></div></Carousel.Item>
      )}
    </Carousel>
  )
}

export default CarouselItem