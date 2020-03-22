import styled from "styled-components";

export const UL = styled.ul`
  display: flex;
  margin-top: 0;
  align-items: center;
  justify-content: center;
  position: relative;
  & #navbar__adressSection {
    display: none;
  }
  li {
    flex: 1;
    list-style-type: none;

    &#navbar__headerText {
      display: none;
    }
    &#navbar__logoSection {
      text-align: center;

      &:hover {
        cursor: pointer;
      }
    }
    img {
      width: 218px;
      height: auto;
    }
  }

  @media (min-width: 768px) {
    & #navbar__adressSection {
      order: 1;
      display: flex;
      text-align: left;
      align-self: flex-start;
      margin-top: 15px;
      font-size: 14px;
      font-weight: 200;
      margin-left: 20px;
      line-height: 16px;
      li {
        color: #0f0756;
      }
    }

    & li#navbar__logoSection {
      order: 2;
      text-align: left;
      flex: 2;
    }
  }
  @media (min-width: 992px) {
    && {
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 20px;
    }
    li {
      &#navbar__headerText {
        display: flex;
        background-color: transparent;
        align-self: flex-end;
        text-align: left;
        font-size: 39px;
        line-height: 37px;
        font-family: ingra-condensed, sans-serif;
        font-weight: 200;
        a {
          color: #0f0756;
        }
      }

      &#navbar__logoSection {
        text-align: center;
        order: 2;

        & #navbar__logoSection--box {
          position: fixed;
          background: white;
          border: 1px solid #9ca4cf;
          box-shadow: 0px 4px 14px rgba(27, 20, 100, 0.25);
          z-index: 100000;
          width: 300px;
          height: 180px;
          left: 50%;
          top: -1px;
          transform: translate(-50%);
          transition: 0.2s top;
        }
        img {
          position: fixed;
          z-index: 100001;
          top: 0;
          width: 278px;
          left: 50%;
          transform: translate(-50%);
          transition: 0.2s top;
        }
      }
      &#navbar__adressSection {
        order: 3;
        font-size: 16px;
        line-height: 18px;
        text-align: right;
        justify-content: flex-end;
        font-family: ingra-condensed, sans-serif;
      }
    }
  }
`;
export const HeaderContainer = styled.nav`
  height: auto;
  transition: 2s height;

  z-index: 10000000000000;
  &.finishOverlay {
    & #navbar__logoSection #navbar__logoSection--box,
    & #navbar__logoSection #navbar__logoSection--logo,
    img {
      position: fixed;
      top: -200px;
      transition: 1.5s top;
    }
  }

  @media (max-width: 767px) {
    &.showLogo {
      margin-bottom: 13vh !important;
    }
    &.showLogo #navbar__logoSection {
      text-align: center;
      position: absolute;
      bottom: -85px;
      z-index: 111111111111111111;
      & #navbar__logoSection--box {
        position: fixed;
        background: white;
        border: 1px solid #9ca4cf;
        box-shadow: 0px 4px 14px rgba(27, 20, 100, 0.25);
        z-index: -1;
        width: 155px;
        height: 100px;
        left: 50%;
        top: 0;
        transform: translate(-50%);
        transition: 0.2s top;
      }
    }
    img {
      width: 130px;
      height: auto;
    }
  }
`;
export const SubMenu = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    & {
      background: #0f0756;

      color: #ffffff;
      text-align: center;
      text-transform: uppercase;
      line-height: 22px;
      font-size: 18px;
      font-family: ingra-condensed, sans-serif;
      font-weight: 200;
    }
  }
`;
export const SubMenuList = styled.ul`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    list-style: none;
    width: 30%;
    justify-content: space-around;
    margin-top: 0;
    margin-bottom: 0;
    li {
      flex: 1;
      padding: 3px;
      padding-left: 0;

      a {
        &:link {
          color: white;
        }
        &:visited {
          color: white;
        }

        &:hover {
          color: #fbb03b;
          text-decoration: none;
        }
      }
    }
  }
`;

export const SubMenuContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    color: white;
  }
`;

export const Overlay = styled.div`
  && {
    font-family: Mr Eaves Sans, Arial, sans-serif;
    position: fixed;
    top: 0;
    text-align: center;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(15, 7, 86, 0.95);
    z-index: 1000000;
    color: white;
    font-size: 25px;
    font-weight: 300;
    line-height: 45px;
    letter-spacing: 3px;
    text-decoration: none;
    a,
    a:link {
      color: white;
    }
    img {
      width: 250px;
      height: 150px;
    }

    visibility: hidden;
    opacity: 0;
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
    transition: opacity 0.35s, visibility 0s 0.35s, -webkit-transform 0.35s ease;
    transition: transform 0.35s ease, opacity 0.35s, visibility 0s 0.35s;
    transition: transform 0.35s ease, opacity 0.35s, visibility 0s 0.35s,
      -webkit-transform 0.35s ease;
  }

  &&.open {
    visibility: visible;
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
    transition: opacity 0.35s, -webkit-transform 0.35s ease;
    transition: transform 0.35s ease, opacity 0.35s;
    transition: transform 0.35s ease, opacity 0.35s,
      -webkit-transform 0.35s ease;
  }

  && .mt-shiny-nav-overlay-close {
    position: fixed;
    top: 25px;
    right: 25px;
    border: none;
    overflow: hidden;
    outline: 0;
    background: 0 0;
    z-index: 10001;
    width: 40px;
    height: 40px;
    padding: 0;
    cursor: pointer;
  }

  && .mt-shiny-nav-overlay-close-icon {
    display: block;
    background: transarent;
    border: none;
  }

  && .mt-shiny-nav-overlay-close-icon-x {
    fill: transparent;
    stroke-linecap: round;
    stroke-width: 2;
  }
  && .mt-shiny-nav-overlay-close-icon-x {
    stroke: #9ca4cf;
  }
`;
