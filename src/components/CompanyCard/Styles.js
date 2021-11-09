import styled from 'styled-components'

export const CardWrapper = styled.div`
  background: ${(props) => props.theme.colors.background};
  border: 5px solid ${(props) => props.theme.colors.secondary};
  height: auto;
  margin: 1rem;
  width: 300px;
  position: relative;
  border-radius: 2rem;
  -webkit-transition: all 250ms ease;
  transition: all 250ms ease;
  &:hover {
    cursor: pointer;
    filter: brightness(130%);
    box-shadow: 1px 0px 16px -2px #49115b;
  }
`

export const Main = styled.div`
  padding: 1rem;
`

export const Title = styled.h1`
  font-size: 1rem;
`

export const LinkOne = styled.h2`
  font-size: 0.8rem;
`

export const LinkTwo = styled.p`
  font-size: 0.8rem;
`

export const LinkThree = styled.p`
  font-size: 0.8rem;
`

export const LinkFour = styled.p`
  font-size: 0.8rem;
`

export const CardImg = styled.img`
  display: block;
  max-width: 100%;
  aspect-ratio: 16/9;
  height: auto;
  object-fit: cover;
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
`
