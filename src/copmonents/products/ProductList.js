//Libraries
import React, { Component } from "react";
import { Link } from "react-router-dom";

//components
import Footer from "../layout/Footer";
import Header from "../layout/Header";

//react-bootstrap
import { Container, Image } from "react-bootstrap";
import Slider from "react-slick";


class ProductList extends Component {
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
    const myTypes = [];
    this.props.myProduct.forEach(v =>
      myTypes.indexOf(v.type) === -1 ? myTypes.push(v.type) : null
    );

    const settings = {
      dots: false,
      infinite: false,

      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,

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
    const bg = this.props.bg;

    return (
      <div>
        <div
          className="listBg"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url(${bg})`
          }}
        >
          <Header
            handleScrollContact={this.handleScrollContact}
          />
        </div>
        <Container>
          {myTypes.map((x, i) => (
            <div className="productSlider py-5" key={i}>
              <h2
                className="text-center"
                style={{ fontFamily: "Oleo Script, cursive", fontSize: "50px" }}
              >
                {myTypes[i]}
              </h2>
              <Slider {...settings}>
                {this.props.myProduct.map(obj =>
                  obj.type === myTypes[i] ? (
                    <div key={i}>
                      <div className="gallery-card py-4 px-1">
                        <Link
                          to={`/product/details/${obj.id}`}
                          variant="outline-light"
                        >
                          <Image
                            className="items img-fluid"
                            src={`${obj.imgs[0]}`}
                            alt={obj.id}
                          />
                        </Link>

                        <div className="detailes text-center pt-2">
                          <p className="prodName">{obj.name} </p>
                          <p className="prodCode" style={{ color: "grey" }}>
                            {obj.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null
                )}
              </Slider>
            </div>
          ))}

         
        </Container>
        <div className="footerbg" ref={this.contact}>
          <Footer />
        </div>
      </div>
    );

  }
}



export default ProductList;
