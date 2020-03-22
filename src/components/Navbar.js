import React, { useState, useEffect } from "react";
import logo from "../img/neubauer-finales-logo-web.svg";
import logoWeis from "../img/neubauer-finales-logo-weiss.svg";
import Hamburger from "../img/ic-menu-hamburger.svg";
import {
  SubMenu,
  HeaderContainer,
  SubMenuContainer,
  SubMenuList,
  UL,
  Overlay
} from "./NavbarStyle.js";

/**********************
 * BOOTSTRAP IMPORTS
 *********************/
const MobileNavbar = ({ className, setIsShown }) => {
  return (
    <Overlay className={"section " + className}>
      <div className="container">
        <button
          type="button"
          onClick={() => {
            setIsShown("");
          }}
          class="mt-shiny-nav-overlay-close"
        >
          <svg viewbox="0 0 30 30" class="mt-shiny-nav-overlay-close-icon">
            <path
              d="M 10,10 L 30,30 M 30,10 L 10,30"
              class="mt-shiny-nav-overlay-close-icon-x"
            ></path>
          </svg>
        </button>
        <div className="columns is-center">
          <div className="column">
            <img src={logoWeis}></img>
          </div>
          <div className="column">
            <ul>
              <li>
                <a>HOME</a>
              </li>
              <li>
                <a>ÜBER UNS ></a>
              </li>
              <li>
                <a>LEISTUNGEN ></a>
              </li>
              <li>
                <a>IMMOBILIEN ></a>
              </li>
              <li>
                <a>KONTAKT</a>
              </li>
              <li>
                <a>IMPRESSUM</a>
              </li>
              <li>
                <a>DATENSCHUTZ</a>
              </li>
              <li>
                <a>ENGLISCH</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Overlay>
  );
};

const Navbar = () => {
  const [isActive, setActive] = useState("");

  window.onscroll = function() {
    var box = document.querySelector("#navbar__logoSection--box");
    var logo = document.querySelector("#navbar__logoSection--logo");
    var container = document.querySelector(
      ".gatsby-plugin-transition-link-portal"
    );

    var currentScrollPosition = window.pageYOffset;
    box.style.top = `${-currentScrollPosition}px`;
    logo.style.top = `${-currentScrollPosition}px`;
    if (container) {
      if (currentScrollPosition < 132) {
        container.style.top = `${-currentScrollPosition}px`;
      } else {
        container.style.top = `${-121}px`;
      }
    }
  };

  return (
    <HeaderContainer id="navbarContainer">
      <div className="container secondContainer">
        <UL>
          <li id="navbar__headerText">
            <a>Immobilien sind Vertrauenssache.</a>
          </li>
          <li id="navbar__logoSection">
            <a>
              <div id="navbar__logoSection--box"></div>
              <img id="navbar__logoSection--logo" src={logo}></img>
            </a>
          </li>
          <li id="navbar__adressSection">
            <ul>
              <li>Alt-Praunheim 50</li>
              <li>D-60488 Frankfurt am Main</li>
              <li>Telefon: 069 95 73 36 71</li>
              <li>Telefax: 069 95 73 36 73</li>
              <li>info@immo-ffm.de</li>
            </ul>
          </li>
        </UL>
      </div>
      <SubMenu>
        <SubMenuContainer className="container">
          <SubMenuList>
            <li className="first">
              <a href="https://www.immobilien-und-consulting.de/index.html">
                Home
              </a>
            </li>
            <li>
              <a href="https://www.immobilien-und-consulting.de/ueber-uns.html">
                Über Uns
              </a>
            </li>
            <li>
              <a href="https://www.immobilien-und-consulting.de/leistungen.html">
                Leistungen
              </a>
            </li>
          </SubMenuList>
          <SubMenuList className="submenu--right">
            <li>
              <a href="https://www.immobilien-und-consulting.de/immobilien.html#/list1">
                Immobilien
              </a>
            </li>
            <li>
              <a href="https://www.immobilien-und-consulting.de/kontakt.html">
                Kontakt
              </a>
            </li>
            <li>
              <a href="https://www.immobilien-und-consulting.de/impressum.html">
                Impressum
              </a>
            </li>
          </SubMenuList>
        </SubMenuContainer>
      </SubMenu>
      <a>
        <img
          src={Hamburger}
          onClick={() => setActive("open")}
          className="is-hidden-desktop"
          style={{
            zIndex: "96",
            width: "56px",
            minWidth: "56px",
            height: "44px",
            position: "absolute",
            top: "23px",
            right: "20px"
          }}
        ></img>
      </a>
      <MobileNavbar className={isActive} setIsShown={setActive}></MobileNavbar>
    </HeaderContainer>
  );
};
export default Navbar;
