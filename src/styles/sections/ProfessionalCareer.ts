import styled from 'styled-components'

export const ProCareer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 4rem 12rem;
  background-color: ${(props) => props.theme.colors.background};
  text-align: left;

  @media only screen and (max-width: 770px) {
    #pentest-content {
      #left {
        width: 16rem !important;
      }

      #right {
        flex-direction: column !important;
        #pentest {
          margin-bottom: 6rem;
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 4rem !important;
    p {
      font-size: 14px;
    }

    #pentest-content {
      #left {
        width: 16rem !important;
      }
    }

    #pentest,
    #forensics-full {
      width: 300px !important;
      height: 450px !important;
      padding: 1rem !important;

      .main {
        width: 150px !important;
      }
    }

    #actions {
      button {
        width: 7rem !important;
        font-size: 14px !important;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: 6rem 8rem;
    p {
      font-size: 14px;
    }
    #pentest,
    #forensics-full {
      width: 300px !important;
      height: 450px !important;
      padding: 1vh 2vh;

      .main {
        width: 150px !important;
      }
    }

    #pentest {
      margin-right: 1rem !important;
    }

    #actions {
      button {
        width: 7rem !important;
        font-size: 14px !important;
      }
    }
  }

  h1 {
    text-align: center;
  }

  #pentest-content {
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;

    #left {
      margin-top: 24px;
      margin-right: 2rem;
      width: 20rem;

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

    #right {
      display: flex;
      flex-direction: row;
    }

    #pentest {
      margin-right: 4rem;
    }

    #pentest,
    #forensics-full {
      text-align: center;
      width: 380px;
      height: 500px;
      border-radius: 50px;
      border: 5px solid #ed1c24;
      padding: 1rem 1.5rem;

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
          margin: 24px 0px;
          justify-content: space-around;
          display: flex;
          button {
            padding: 8px;
            justify-content: center;
            width: 8rem;
            height: 3rem;
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
