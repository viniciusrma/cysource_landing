import styled from 'styled-components'
import mainBackground from '../../assets/mainBackground.svg'
import laptopBg from '../../assets/laptopBg.svg'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
`

export const Header = styled.div`
  width: 100%;
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
    cursor: pointer;
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

export const ForOrgs = styled.div`
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

export const ProfessionalCareer = styled.div`
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

export const InfoAboutCyberSecutity = styled.div`
  width: 100%;
  display: flex;
  padding: 7vh 18vw;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};
  text-align: left;
  justify-content: space-around;

  #left,
  #right {
    width: 40%;
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

export const SkillsCourses = styled.div`
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

export const AdvancedCourses = styled.div`
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

export const CompaniesCarousel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5vh 20vw;
  background-color: ${(props) => props.theme.colors.secondary};
  text-align: left;

  h1 {
    text-align: center;
  }

  .company {
    height: 25vh;
  }
`
