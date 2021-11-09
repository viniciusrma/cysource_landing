import styled from 'styled-components'

export const CarouselOfCases = styled.div`
  // Mobile devices
  @media (max-width: 480px) {
  }

  // ipad, tablets
  @media (max-width: 768px) {
  }

  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5vh 4vw;
  background-color: ${(props) => props.theme.colors.secondary};
  text-align: left;
  overflow: hidden;

  .carousel {
    h1 {
      text-align: center;
      margin-bottom: 5vh;
    }

    .embla__container {
      display: flex;
      flex-direction: row;
    }

    .embla__slide {
      background-color: ${(props) => props.theme.colors.color};
      color: ${(props) => props.theme.colors.background};
      height: 330px;
      width: 280px;
      border-radius: 8px;
      padding: 4vh 1vw 2vh 1vw;
      text-align: center;
      font-size: 14px;
      margin-right: 2vw;
      position: relative;
      flex: 0 0 20%;

      #top {
        margin-bottom: 1.8vh;

        img {
          margin-bottom: 1.8vh;
        }
      }

      #bottom {
        display: flex;
        flex-direction: column;

        a {
          margin-bottom: 0.8vh;
        }
      }
    }
  }
`
