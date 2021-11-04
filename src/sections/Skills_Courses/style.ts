import styled from 'styled-components'

export const Skills_Courses = styled.div`
  // Mobile devices
  @media (max-width: 480px) {

  }

  // ipad, tablets
  @media (max-width: 768px) {

  }

  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 7vh 18vw;
  background-color: ${(props) => props.theme.colors.background};
  text-align: left;

  .skills-title {
    text-align: center;
    margin-bottom: 10vh;
  }

  .row,
  .second-row {
    display: flex;
    justify-content: space-around;

    #skill {
      width: 320px;
      height: 512px;
      border-radius: 50px;
      border: 5px solid #ed1c24;
      margin: 1vh;
      text-align: center;
      padding: 1vh 1vw;

      .main {
        position: relative;
        z-index: 10;
        top: -100px;
      }

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
            margin-right: 4px;
          }
        }

        #actions {
          margin: 16px 0px 40px 0px;
          justify-content: space-around;
          display: flex;
          button {
            justify-content: center;
            width: 5vw;
            height: 4vh;
            background-color: ${(props) => props.theme.colors.contrast};
            border-radius: 4px;
            border: none;
            font: 500 16px 'Encode Sans Expanded', sans-serif;
            color: ${(props) => props.theme.colors.color};

            &:hover {
              background-color: rgba(58, 203, 140, 0.2);
            }
          }
        }
      }
    }
  }

  .row {
    margin-bottom: 10vh;
  }
`
