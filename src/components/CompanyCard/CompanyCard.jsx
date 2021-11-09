import React from 'react'
import { CardWrapper, Main, Title, LinkOne, LinkTwo, LinkThree, LinkFour, CardImg } from './Styles'
import amazon from '../../assets/img/courses/forensicsFull.svg'

const Card = ({
  variant,
  children,
  width = 230,
  height,
  className,
  img,
  title,
  ourResearch,
  canaltech,
  computerWorld,
  PCWorld,
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
      <CardImg src={amazon} alt="" />
      <Main>
        <Title>{title}</Title>
        <LinkOne>{linkOne}</LinkOne>
        <LinkTwo>{linkTwo}</LinkTwo>
        <LinkThree>{linkThree}</LinkThree>
        <LinkFour>{linkFour}</LinkFour>
      </Main>
    </CardWrapper>
  )
}

export default Card
