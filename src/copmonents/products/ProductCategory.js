import React, { Component } from "react";
import { Link } from "react-router-dom";
//slick carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import db
import db from "../../database/db";

//BOOTSTRAP
import { Col, Button, Container, Image, Jumbotron } from "react-bootstrap";
class ProductCategory extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const data = db.findAll();

    return (
      <div>
        <Container className="py-5 OUR-PRODUCTS">
          <h2
            className="text-center py-2"
            style={{
              color: "black",
              fontFamily: "Oleo Script, cursive",
              fontSize: "48px"
            }}
          >
            Trending Now
          </h2>

          <Slider {...settings}>
            {data.map(product => {
              return (
                <div key={product}>
                  <div className="px-3">
                    <Link
                      to={`/product/details/${product.id}`}
                      variant="outline-light"
                    >
                      <Image
                        className="img-fluid testSlide"
                        src={`${product.imgs[0]}`}
                        variant="outline-light"
                      />
                    </Link>
                  </div>

                  <div>
                    <h5>{product.name}</h5>
                    <p>{product.description}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </Container>

        <Jumbotron className="sectionOne m-auto">
          <h1 className="categoryTitle">FACE</h1>
          <Col sm={12} md={6}>
            <h5 className="py-4">
              Filter away any blemishes by selecting any of our available
              foundations, which come in various shades that fit every woman’s
              dreams! Their luxurious texture and coverage power will leave your
              skin looking fresh and hydrated.
            </h5>
          </Col>
          <p>
            <Link to="/products/Face">
              <Button className=" mt-2 shopBtn">CHECK MORE</Button>
            </Link>
          </p>
        </Jumbotron>

        <div className="my-5">
          <Jumbotron className="sectionTwo m-auto w-75 py-5">
            <h1 className="categoryTitle">LIPS</h1>
            <Col sm={6}>
              <h5 className="py-4">
                Rich, Creamy, and Colorful Lipsticks are our domain! Enjoy our
                wide range of Lipstick Shapes and Shades, that will leave
                everyone around you in awe!
              </h5>
            </Col>
            <Link to="/products/Lips">
              <Button className=" m-2 shopBtn">CHECK MORE</Button>
            </Link>
          </Jumbotron>
        </div>

        <div className="my-5">
          <Jumbotron className="sectionThree m-auto w-75 py-5">
            <h1 className="categoryTitle">EYES</h1>
            <Col sm={6}>
              <h5 className="py-4">
                Experience the essence of Eye Makeup with our set of Eyeliners
                that can give you any shape you desire. Their longwear formulas
                help you create the best Eye looks that can go on for days and
                their versatility helps you create any look you desire!
              </h5>
            </Col>
            <Link to="/products/Eyes">
              <Button className=" m-2 shopBtn">CHECK MORE</Button>
            </Link>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default ProductCategory;
