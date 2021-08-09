import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
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
  width: 100%;
  height: 91%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  padding: 100px 0px 0px 120px;

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
    margin-right: 220px;
  }
`
