import React, { Component } from "react";
//components
import Footer from "../layout/Footer";
import Header from "../layout/Header";
//import db
import db from "../../database/db";
//image
//react-bootstrap
import { Container, Col, Row, Image } from "react-bootstrap";
//slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimilarProducts from "./SimilarProducts";
class ProductDetails extends Component {
  constructor() {
    super();
    this.down = React.createRef();

    this.state = {
      product: {},
      currentIndex: null
    };
  }

  handleScrollContact = e => {
    const down = this.down.current;
    window.scrollTo({
      top: down.offsetTop,
      left: 0,
      behavior: "smooth"
    });
  };

  getproductDetails = id => {
    this.setState({ product: db.findById(id) });
  };

  componentWillMount() {
    this.getproductDetails(this.props.match.params.id);
    window.scrollTo(0, 0);
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    const imgs = this.state.product.imgs;
    const settings = {
      customPaging: function(i) {
        return (
          <a href="/">
            <img className="responsive-img" src={`${imgs[i]}`} alt="sora" />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true
    };

    const photos = [];
    imgs.map(src => photos.push({ src }));
    //console.log("hereee my photos");
    //console.log(photos);

    return (
      <div>
        {this.state.product.category === "Face" ? (
          <div
            className="singleitem-bg"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url(${"https://lh6.googleusercontent.com/R-9_6znYBIwvv87JZlSiKGNt45WXKqNHUTGTky8_4-hY-5od0LM6kABDVumpdoZZ_GU=w2400"})`
            }}
          >
            <Header
              className="singleitem-bg"
              handleScrollContact={this.handleScrollContact}
            />
          </div>
        ) : this.state.product.category === "Eyes" ? (
          <div
            className="singleitem-bg"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url(${"https://lh6.googleusercontent.com/BXpudhpc74CEjAO8z2mW6CA3wczr4hlKjMGGLfxiLhz5b0TmyhjnzSdyBPTME2JH7So=w2400"})`
            }}
          >
            <Header
              className="singleitem-bg"
              handleScrollContact={this.handleScrollContact}
            />
          </div>
        ) : this.state.product.category === "Lips" ? (
          <div
            className="singleitem-bg"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url(${"https://lh5.googleusercontent.com/Nc5P16tcHcZ9VHCBemygohOIoVZLpjp96h-vWG9O26LBxIEaR1FT-MGXcpmZZ2tzV0Y=w2400"})`
            }}
          >
            <Header
              className="singleitem-bg"
              handleScrollContact={this.handleScrollContact}
            />
          </div>
        ) : null}

        <Container className="my-5 ">
          <Row>
            <Col sm={6} md={6} lg={6}>
              <Slider {...settings} className="myslider">
                {imgs.map(img => {
                  return (
                    <div key={Math.random()*10}>
                      <Image
                        className="img-fluid "
                        src={`${img}`}
                        alt="First slide"
                      />
                    </div>
                  );
                })}
              </Slider>
            </Col>
            <Col style={{ marginTop: "12rem" }} sm={12} md={12} lg={6}>
              <Col className="d-flex justify-content-center">
                <div className="beww " style={{ paddingLeft: "20px" }}>
                  <h3 style={{ fontWeight: "bold", color: "black" }}>
                    {this.state.product.name}
                  </h3>

                  <p className=" pt-1" style={{ fontWeight: "500" }}>
                    {this.state.product.description}
                  </p>
                  <p style={{ fontWeight: "500", color: "#a3aab1" }}>
                    ITEM {this.state.product.factoryCode}
                  </p>
                </div>
              </Col>
              <Col>
                <Image
                  className="img-fluid justify-content-center"
                  style={{ margin: "auto"}}
                  src={this.state.product.palette}
                />
              </Col>
            </Col>
          </Row>
        </Container>
        <SimilarProducts
          itemId={this.state.product.id}
          updateProduct={this.getproductDetails}
        />
        <div ref={this.down}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default ProductDetails;
