import React from "react";
import "./Dashboards.css";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import logo from "../../img/logo.png";
import add from "../../img/add.svg";
import more from "../../img/more.svg";

const Dashboards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="padri">
      <div className="container">
        <div className="card">
          <Row>
            <Col className="title">All Members</Col>
            <Col>
              <a>
                <img className="icons" src={more} />
              </a>
              <a>
                <img className="icons" src={add} />
              </a>
            </Col>
          </Row>
          <div className="filtersdiv">
            <Row className="filters text-center">
              <Col>
                <a href="#">
                  <div
                    className={
                      activeIndex == 0 ? " text filtre selected" : "text filtre"
                    }
                    onClick={() => {
                      setActiveIndex(0);
                    }}
                  >
                    <p>All</p>
                  </div>
                </a>
              </Col>
              <Col>
                <a href="#">
                  <div
                    className={
                      activeIndex == 1 ? " text filtre selected" : "text filtre"
                    }
                    onClick={() => {
                      setActiveIndex(1);
                    }}
                  >
                    <p>Alumni</p>
                  </div>
                </a>
              </Col>
              <Col>
                <a href="#">
                  <div
                    className={
                      activeIndex == 2 ? " text filtre selected" : "text filtre"
                    }
                    onClick={() => {
                      setActiveIndex(2);
                    }}
                  >
                    <p>Bureau</p>
                  </div>
                </a>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboards;
