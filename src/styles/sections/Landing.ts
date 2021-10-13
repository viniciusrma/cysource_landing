import styled from 'styled-components'
import mainBackground from '../../assets/mainBackground.svg'

export const LandingSection = styled.div`
  height: 91vh;
  width: 100%;
  display: flex;
  text-align: left;
  padding: 10vh 20vw;

  background-image: url(${mainBackground});
  background-color: ${(props) => props.theme.colors.background} !important;
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 50%;

  @media (max-width: 858px) {
    background-image: none;
    padding: 10vh 25vw;
  }

  #texts {
    margin-top: 10vh;

    h1 {
      font-size: 36px;
      color: ${(props) => props.theme.colors.primary};
      width: 440px;
    }

    p {
      margin-top: 24px;
      font-size: 16px;
      line-height: 32px;
      width: 500px;
    }

    span {
      color: ${(props) => props.theme.colors.secondary};
    }

    #landing-buttons {
      margin-top: 20px;
      button {
        cursor: pointer;
        padding: 16px 40px;
        font: 600 16px 'Encode Sans Expanded', sans-serif;
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.background};
        border-radius: 4px;
        border: none;

        &:hover {
          box-shadow: 0px 0px 4px 4px #a630b0;
        }
      }
      #start {
        margin-right: 1vw;
      }

      img {
        background-repeat: no-repeat;
      }
    }
  }
`
