import React, { Component } from "react";
//import db
import db from "../../database/db";

import { Link } from "react-router-dom";

//react-bootstrap
import { Container, Image } from "react-bootstrap";
//slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class SimilarProducts extends Component {
  constructor() {
    super();

    this.state = {
      product: {}
    };
  }

  handleclick = x => {
    this.props.updateProduct.bind(this, this.props.itemId);
  };
 
  render() {
    const itemId = this.props.itemId;
    const similarData = db.findSimilarProducts(itemId);

    const settings = {
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
            infinite: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
    };

    return (
      <Container>
        <div className="similardata">
          <hr className="py-3" />
          <h3 className="text-center">YOU MIGHT ALSO LIKE</h3>
          <div className="py-4">
            <Slider {...settings}>
              {similarData.map(slide => {
                return (
                  <div  key={slide}>
                    <div className="px-3">
                      <Link
                        to={`/product/details/${slide.id}`}
                        variant="outline-light"
                      >
                        <Image
                          onClick={this.props.updateProduct.bind(
                            this,
                            slide.id
                          )}
                          className="img-fluid similarimage"
                          src={`${slide.imgs[0]}`}
                        />
                      </Link>
                    </div>
                    <div>
                      <h5>{slide.type}</h5>
                      <p>{slide.factoryCode}</p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </Container>
    );
  }
}

export default SimilarProducts;
