import styled from 'styled-components'

export const Advanced = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 7vh 18vw;
  background-color: ${(props) => props.theme.colors.background};
  text-align: left;

  .advanced-title {
    text-align: center;
    margin-bottom: 5vh;
  }

  h4 {
    margin-bottom: 10vh;
  }

  .container {
    display: flex;
    justify-content: space-between;
  }

  #left {
    padding-left: 50px;

    #malware-analysis {
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

  #right {
    display: flex;
    align-items: center;
  }
`
