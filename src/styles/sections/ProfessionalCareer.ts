import styled from 'styled-components'

export const ProCareer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 7vh 18vw;
  background-color: ${(props) => props.theme.colors.background};
  text-align: left;

  h1 {
    text-align: center;
  }

  #pentest-content {
    display: flex;
    justify-content: space-around;
    margin-top: 10vh;

    #left {
      margin-top: 24px;
      width: 30%;

      #logo {
        margin: 24px 0px;
      }

      p {
        font: 400 16px 'Encode Sans Expanded', sans-serif;
        text-align: left;
      }

      div {
        margin-top: 20px;
      }

      a {
        margin-top: 20px;
        text-align: left;
        background-color: ${(props) => props.theme.colors.background};
        font: 600 16px 'Encode Sans Expanded', sans-serif;
        color: ${(props) => props.theme.colors.primary};
        border-radius: 4px;
        border: none;

        #arrow {
          margin-left: 10px;
        }
      }
    }

    #pentest,
    #forensics-full {
      text-align: center;
      width: 400px;
      height: 560px;
      border-radius: 50px;
      border: 5px solid #ed1c24;
      padding: 1vh 1.5vw;

      .main {
        position: relative;
        z-index: 10;
        top: -100px;
      }

      #card {
        text-align: left;
        top: -100px;
        position: relative;

        h1 {
          text-align: left;
        }

        #info {
          display: flex;
          margin: 16px 0px;
          img,
          p {
            margin-right: 10px;
          }
        }

        #actions {
          margin: 16px 0px 40px 0px;
          justify-content: space-around;
          display: flex;
          button {
            justify-content: center;
            width: 5.7vw;
            height: 4vh;
            background-color: ${(props) => props.theme.colors.contrast};
            border-radius: 4px;
            border: none;
            font: 600 16px 'Encode Sans Expanded', sans-serif;
            color: ${(props) => props.theme.colors.color};

            &:hover {
              background-color: rgba(58, 203, 140, 0.2);
            }
          }
        }
      }
    }
  }
`
