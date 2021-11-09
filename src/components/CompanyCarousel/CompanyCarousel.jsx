import React from 'react'
import Slider from 'react-slick'
import CompanyCard from './../../components/CompanyCard'
import { SliderWrapper, CardWrapper } from './Styles'

const CompanyCarousel = ({
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
        {CarouselItemsObject.map(function (itemObject) {
            return (
              <CardWrapper>
                <CompanyCard
                  title={itemObject.title}
                  linkOne={itemObject.linkOne}
                  linkTwo={itemObject.linkTwo}
                  linkThree={itemObject.linkThree}
                  linkFour={itemObject.linkFour} />
              </CardWrapper>
            )
          })}
      </Slider>
    </SliderWrapper>
  )
}

export default CompanyCarousel
