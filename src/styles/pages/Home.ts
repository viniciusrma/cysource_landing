import styled from 'styled-components'
import mainBackground from '../../assets/mainBackground.svg'
import laptopBg from '../../assets/laptopBg.svg'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`

export const Header = styled.div`
  width: 100vw;
  height: 9vh;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  .logo {
    max-width: 150px;
    margin-right: 20px;
  }

  #nav-button {
    padding: 32px 24px;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.color};
    font: 400 16px 'Encode Sans Expanded', sans-serif;
    border: none;

    &:hover {
      background-color: ${(props) => props.theme.colors.contrast};
    }
  }
`

export const Landing = styled.div`
  @media only screen and (max-width: 1152px) {
    background-image: url(${laptopBg});
  }

  height: 91%;
  display: flex;
  text-align: left;
  padding: 120px 0px 0px 400px;

  h1 {
    font-size: 36px;
    margin-top: 40px;
    color: ${(props) => props.theme.colors.primary};
    width: 440px;
  }

  p {
    margin-top: 24px;
    font-size: 16px;
    line-height: 32px;
    width: 440px;
  }

  span {
    color: ${(props) => props.theme.colors.secondary};
  }

  #texts {
    margin-right: 100px;
    min-width: 500px;
  }

  #landing-buttons {
    margin-top: 20px;
    button {
      padding: 16px 40px;
      font: 600 16px 'Encode Sans Expanded', sans-serif;
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.background};
      border-radius: 4px;
      border: none;

      &:hover {
        box-shadow: 0px 0px 4px 0px ${(props) => props.theme.colors.primary};
      }
    }
    #start {
      margin-right: 10px;
    }
  }
`

export const ForOrgs = styled.div`
  width: 100vw;
  height: 500px;
  display: flex;
  flex-direction: space-between;
  padding: 120px 300px 0px 300px;
  background-color: ${(props) => props.theme.colors.primary};
  text-align: left;

  h1 {
    max-width: 560px;
  }

  #forOrg-buttons {
    margin-top: 20px;
    button {
      padding: 16px 40px;
      font: 600 16px 'Encode Sans Expanded', sans-serif;
      background-color: ${(props) => props.theme.colors.background};
      color: ${(props) => props.theme.colors.color};
      border-radius: 4px;
      border: none;

      &:hover {
        box-shadow: 0px 0px 4px 0px ${(props) => props.theme.colors.background};
      }
    }
    #start {
      margin-right: 10px;
    }
  }
`
