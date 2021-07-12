import React from "react";
import "./navbarsass.css";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import logo from "../../img/logo.png";
import menu from "../../img/menu.svg";
import members from "../../img/members.svg";
import profil from "../../img/profil.svg";
import years from "../../img/years.svg";
import Export from "../../img/export.svg";
import Import from "../../img/import.svg";

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    {
    }
  }, [0]);

  return (
    <div className="sidebar">
      <a href="#">
        <img className="sidebarlogo" src={logo} />
      </a>
      <a href="#">
        <div
          className="menu-item"
          className={activeIndex == 0 ? " menu-item active" : "menu-item"}
          onClick={() => {
            setActiveIndex(0);
          }}
        >
          <img className="icon-item" src={menu} />
          <a className="text-item ">Dashboards</a>
        </div>
      </a>
      <a href="#">
        <div
          className="menu-item"
          className={activeIndex == 1 ? " menu-item active" : "menu-item"}
          onClick={() => {
            setActiveIndex(1);
          }}
        >
          <img className="icon-item" src={members} />
          <a className="text-item">Members</a>
        </div>
      </a>
      <a href="#">
        <div
          className="menu-item"
          className={activeIndex == 2 ? "menu-item active" : "menu-item"}
          onClick={() => {
            setActiveIndex(2);
          }}
        >
          <img className="icon-item" src={profil} />
          <a className="text-item">Profils</a>
        </div>
      </a>
      <a href="#">
        <div
          className="menu-item"
          className={activeIndex == 3 ? "menu-item active" : "menu-item"}
          onClick={() => {
            setActiveIndex(3);
          }}
        >
          <img className="icon-item" src={years} />
          <a className="text-item">All years</a>
        </div>
      </a>
      <div className="line"></div>
      <a href="#">
        <div
          className="menu-item "
          className={activeIndex == 4 ? "menu-item active" : "menu-item"}
          onClick={() => {
            setActiveIndex(4);
          }}
        >
          <img className="icon-item" src={Import} />
          <a className="text-item">Import List</a>
        </div>
      </a>
      <a href="#">
        <div
          className="menu-item"
          className={activeIndex == 5 ? "menu-item active" : "menu-item"}
          onClick={() => {
            setActiveIndex(5);
          }}
        >
          <img className="icon-item" src={Export} />
          <a className="text-item">Export List</a>
        </div>
      </a>

      <a href="#">
        <div className="menu-item-footer">
          <a className="text-item">Made with ♥ for CSE</a>
        </div>
      </a>
    </div>
  );
};

export default Header;
