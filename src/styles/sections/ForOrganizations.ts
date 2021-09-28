import styled from 'styled-components'

export const ForOrgs = styled.div`
  // Mobile devices
  @media (max-width: 480px) {
  }

  // ipad, tablets
  @media (max-width: 768px) {
  }

  width: 100%;
  display: flex;
  flex-direction: space-around;
  padding: 10vh 20vw;
  background-color: ${(props) => props.theme.colors.primary};
  background: linear-gradient(
    85.96deg,
    #3cc28d 49.48%,
    #469d90 58.84%,
    #45a190 68.99%,
    #489491 76.84%,
    #4a8c92 80.99%,
    #4d8093 84.97%,
    #507595 90.12%,
    #527095 92.45%,
    #536a96 94.68%,
    #556596 96.6%,
    #566297 98.56%,
    #575d97 100%
  );

  @media only screen and (max-width: 1500px) {
    padding: 10vh 12vw;
  }

  @media only screen and (max-width: 1150px) {
    padding: 10vh 8vw;
  }

  @media only screen and (max-width: 1000px) {
    padding: 10vh 6vw;
  }

  #texts {
    margin-top: 4vh;
    margin-left: 2vw;

    h1 {
      max-width: 560px;
      color: ${(props) => props.theme.colors.background};
      text-align: left;

      &:hover {
        cursor: default;
        text-decoration: underline;
        text-decoration-color: ${(props) => props.theme.colors.secondary};
      }
    }

    #forOrg-buttons {
      text-align: left;
      margin-top: 2vh;
      button {
        cursor: pointer;
        padding: 16px 40px;
        font: 600 16px 'Encode Sans Expanded', sans-serif;
        background-color: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.color};
        border-radius: 4px;
        border: none;

        &:hover {
          box-shadow: 0px 0px 4px 4px #a630b0;
        }
      }
      #start {
        margin-right: 1vw;
      }
    }
  }
`
