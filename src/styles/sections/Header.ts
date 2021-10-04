import styled from 'styled-components'

export const HeaderSection = styled.div`
  // Mobile devices
  @media (max-width: 480px) {
  }

  // ipad, tablets
  @media only screen and (max-width: 768px) {
    .nav-menu {
      position: fixed;
      left: -100%;
      top: 5rem;
      flex-direction: column;
      background-color: #fff;
      width: 100%;
      border-radius: 10px;
      text-align: center;
      transition: 0.3s;
      box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    }



    .nav-menu.active {
      left: 0;
    }

    .nav-item {
      margin: 2.5rem 0;
    }

    .hamburger {
      display: block;
      cursor: pointer;
    }
  }

  img {
    float: left;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    width: 100%
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .hamburger {
    display: none;
  }

  .bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: #101010;
  }

  .nav-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-item {
    margin-left: 5rem;
  }

  .nav-link {
    font-size: 1.6rem;
    font-weight: 400;
    color: #475569;
  }

  .nav-link:hover {
    color: #482ff7;
  }

  .nav-logo {
    font-size: 2.1rem;
    font-weight: 500;
    color: #482ff7;
  }

  // width: 100%;
  // height: 9vh;
  // padding: 0px 20px;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  // flex-direction: row;

  // .logo {
  //   max-width: 150px;
  //   margin-right: 20px;
  // }

  // #nav-button {
  //   cursor: pointer;
  //   padding: 32px 24px;
  //   background-color: ${(props) => props.theme.colors.background};
  //   color: ${(props) => props.theme.colors.color};
  //   font: 400 16px 'Encode Sans Expanded', sans-serif;
  //   border: none;

  //   &:hover {
  //     background-color: ${(props) => props.theme.colors.contrast};
  //   }
  // }
`
