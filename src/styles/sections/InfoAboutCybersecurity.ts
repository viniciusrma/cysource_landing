import styled from 'styled-components'

export const InfoAboutCyberSecutity = styled.div`
  width: 100%;
  display: flex;
  padding: 4rem 20rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};
  text-align: left;
  justify-content: space-around;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 6rem !important;
  }

  @media only screen and (max-width: 1280px) {
    padding: 4rem 8rem;
  }

  #right {
    width: 30rem;
    margin-top: 4rem;
  }

  h1 {
    margin-bottom: 2vh;
  }

  button {
    cursor: pointer;
    padding: 2vh 2vw;
    font: 600 16px 'Encode Sans Expanded', sans-serif;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.color};
    border-radius: 4px;
    border: none;

    &:hover {
      box-shadow: 0px 0px 4px 4px #a630b0;
    }
  }
`
