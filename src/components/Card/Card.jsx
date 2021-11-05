import React from 'react'
import { CardWrapper, Main, Title, CardImg } from './Styles'
import ProgressBar from '../ProgressBar'

const Card = ({
  progressBar = false,
  progressDone,
  variant,
  children,
  width = 230,
  height,
  className,
  img,
  title,
  price,
  ...rest
}) => {
  return (
    <CardWrapper
      width={width}
      height={height}
      className={className}
      variant={variant}
      {...rest}
    >
      <CardImg src={require(`../../assets/img/${img}`).default} alt="" />

      <Main>
        <Title>{title}</Title>
        {progressBar && <ProgressBar done={progressDone} />}
        {price && <span>Price:{price}</span>}
      </Main>
    </CardWrapper>
  )
}

export default Card
