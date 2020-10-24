import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Image,
} from "react-bootstrap";

import {
  FaBeer,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default class NavbarComponent extends Component {
  render() {
    return (
      <div stye={{ backgroundColor: "#FBFBFB" }}>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <Image
              src="https://static1.squarespace.com/static/57a952695016e10950e89607/t/5eb786ae257cac7659290e2f/1599588764375/?format=1500w"
              style={{ width: "60%" }}
            ></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              style={{
                position: "absolute",
                right: 40,
                top: 30,
              }}
            >
              <Nav.Link
                className="px-3"
                style={{
                  fontFamily: "monospace",
                  fontWeight: "bolder",
                  fontSize: "18px",
                  fontColor: "black",
                }}
              >
                HOME
              </Nav.Link>
              <Nav.Link
                className="px-3"
                style={{
                  fontFamily: "monospace",
                  fontWeight: "bolder",
                  fontSize: "18px",
                  fontColor: "black",
                }}
              >
                ABOUT US
              </Nav.Link>
              <Nav.Link
                className="px-3"
                style={{
                  fontFamily: "monospace",
                  fontWeight: "bolder",
                  fontSize: "18px",
                  fontColor: "black",
                }}
              >
                SERVICES
              </Nav.Link>
              <Nav.Link
                className="px-3"
                style={{
                  fontFamily: "monospace",
                  fontWeight: "bolder",
                  fontSize: "18px",
                  fontColor: "black",
                }}
              >
                PORTFOLIO
              </Nav.Link>
              <Nav.Link
                className="px-3"
                style={{
                  fontFamily: "monospace",
                  fontWeight: "bolder",
                  fontSize: "18px",
                  fontColor: "black",
                }}
              >
                BLOG
              </Nav.Link>
              <Nav.Link
                className="px-3"
                style={{
                  fontFamily: "monospace",
                  fontWeight: "bolder",
                  fontSize: "18px",
                  fontColor: "black",
                }}
              >
                CONTACT
              </Nav.Link>
              <NavDropdown
                className="px-3"
                title="+ TWINGO"
                style={{
                  fontFamily: "monospace",
                  fontWeight: "bolder",
                  fontSize: "18px",
                  fontColor: "black",
                }}
              >
                <NavDropdown.Item>OVO BASKETBALL</NavDropdown.Item>
                <NavDropdown.Item>DREW LEAGUE</NavDropdown.Item>
                <NavDropdown.Item>CROWN LEAGUE</NavDropdown.Item>
                <NavDropdown.Item>NYC TOUR</NavDropdown.Item>
              </NavDropdown>
              <FaTwitter style={{ margin: 10 }} size="2em" />
              <FaFacebookF style={{ margin: 10 }} size="2em" />
              <FaYoutube style={{ margin: 10 }} size="2em" />
              <FaLinkedinIn style={{ margin: 10 }} size="2em" />
              <FaInstagram style={{ margin: 10 }} size="2em" />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
