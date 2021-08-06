import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h1 {
    font-size: 54px;
    margin-top: 40px;
    color: ${props => props.theme.colors.primary}
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`
