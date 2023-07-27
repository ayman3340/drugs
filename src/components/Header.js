import React from "react";
import "../App.css";
import "jquery";
import images from "../assets/websiteIcon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
export default function Header() {
  return (
    <div>
      <Navbar expand="lg" className="">
        <Container>
          <Navbar.Brand href="#home">
            <img src={images} alt="logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{
              border: "rgba(255, 0, 0, 0) solid 20px",
              backgroundColor: "rgba(255, 0, 0, 0)",
              color: "rgba(255, 0, 0, 0)",
            }}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex justify-content-center align-item-center">
              <Nav.Link href="#FiveSection" className="mx-5">
                التبليغ عن تجار المخدرات
              </Nav.Link>
              <Nav.Link href="#FourSection" className="mx-5">
                علاج ادمان المخدرات
              </Nav.Link>
              <Nav.Link href="#ThirdSection" className="mx-5">
                {" "}
                الوقاية من المخدرات{" "}
              </Nav.Link>
              <Nav.Link href="#SecoundSection" className="mx-5">
                أنواع المخدرات
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
