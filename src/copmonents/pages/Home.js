// Libraries
import React, { Component } from "react";

// Modules
import Header from "../layout/Header";
import Footer from "../layout/Footer";

//react-bootstrap
import { Container, Col } from "react-bootstrap";
import ProductCategory from "../products/ProductCategory";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.contact = React.createRef();
  }

  handleScrollContact = e => {
    const contact = this.contact.current;
    window.scrollTo({
      top: contact.offsetTop,
      left: 0,
      behavior: "smooth"
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div className="home-bg">
          <div>
            <Header
              handleScrollContact={this.handleScrollContact}
            />
          </div>
        </div>

        <Container>
          <div className="about-us text-center">
            <Col sm={12} md={5} id="about" className="m-auto py-5 about">
              <h3>ABOUT US</h3>
              <p>
                Pretty Woman Cosmetics offers a wide variety of courses that are
                leading experts in aesthetics or cosmetology. Our programs are
                hands on with practical training as well as theory. We also take
                great pride in Internship with our very own beauty brand PRETTY
                WOMAN COSMETICS one of the leading professional brands. This
                offers students brand exposure, portfolio building workshops in
                fashion shows, commercials, celebrity makeup networking events
                and much more.
              </p>
            </Col>
          </div>
        </Container>

        <div className="homeProd">
          <ProductCategory />
        </div>

        <div ref={this.contact}>
          <Footer />
        </div>
      </div>
    );
  }
}
