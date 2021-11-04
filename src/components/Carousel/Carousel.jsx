import React from 'react'
import Slider from 'react-slick'
import Card from './../../components/Card'
import { SliderWrapper, CardWrapper } from './Styles'

const Carousel = ({
  Defaultsettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  },
  CarouselItemsObject
}) => {
  return (
    <SliderWrapper>
      <Slider {...Defaultsettings}>
        {CarouselItemsObject.map((itemObject) => {
          return (
            <CardWrapper>
              <Card
                title={itemObject.name}
                img={itemObject.src}
                width={300}
                price={itemObject.price}
              />
            </CardWrapper>
          )
        })}
      </Slider>
    </SliderWrapper>
  )
}

export default Carousel
