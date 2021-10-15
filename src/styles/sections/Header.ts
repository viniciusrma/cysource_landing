import styled from 'styled-components'

export const HeaderSection = styled.div`
  // Mobile devices
  @media (max-width: 1125px) {
    a.nav-link {
      font-size: 14px;
    }
  }

  // ipad, tablets
  @media (max-width: 952px) {
    ul {
      position: fixed;
      width: 100%;
      height: 100vh;
      background: ${(props) => props.theme.colors.background};
      left: -1000px;
      top: 100px;
      text-align: center;
      transition: all .5s;

      li {
        width: 100%;
      }

      #check:checked ~ ul {
        left: 100;
      }
    }
  }

  @media (max-width: 858px) {
    .checkbtn {
      display: block !important;
    }

    ul {
      position: fixed;
      width: 100%;
      height: 100vh;
      background: ${(props) => props.theme.colors.background};
      left: -1000px;
      text-align: center;
    }

    nav ul li {
      display: block;
      margin: 50px 0;
      line-height: 30px;
    }

    nav ul li a {
      font-size: 20px;
    }

    #check:checked ~ ul {
      left: 0;
    }
  }


  display: flex;
  justify-content: space-between;
  height: 100px;
  width: 100%;

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;

  }

  nav ul {
    float-right;
    margin-right: 20px;
  }

  nav ul li {
    display: inline-block;
    line-height: 60px;
    margin: 0 5px;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    width: 100%;
  }

  .nav-link {
    font-size: 1.1rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.color};
    text-transform: uppercase;
    padding: 8px 16px;
    border-radius: 4px;
  }

  #check {
    display: none;
  }

  .checkbtn {
    font-size: 30px;
    color: ${(props) => props.theme.colors.color};
    float: right;
    display: none;
  }

  .hamburguer {
    display: none;
  }

  .nav-link:hover {
    color: ${(props) => props.theme.colors.secondary};
  }

  .nav-logo {
    font-size: 2.1rem;
    font-weight: 500;
    color: #482ff7;
  }

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
