import React, { Component } from "react";

// Used components
import ProductList from "./ProductList";

// Import the db file
import db  from "../../database/db";

export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      bg: "",
      myProduct: db.findByCategory("Face")
    };
    this.getImages = this.getImages.bind(this);
  }

  getImages() {
    switch (this.props.location.pathname.substring(10)) {
      case "Face":
        this.setState(state => {
          const info = db.findByCategory("Face");
          return {
            myProduct: info,
            bg: 'https://lh4.googleusercontent.com/ykasmkGdr8JF3cyZwdJ-AL-NLIlcGkDCiVEKWRwKhIKsGWqPX-lGJAagESNDo9Wftw0=w2400'
          };
        });
        break;
      case "Lips":
        this.setState(state => {
          const info = db.findByCategory("Lips");
          return {
            myProduct: info,
            bg: 'https://lh4.googleusercontent.com/sj_y1oKK7c-yEBsjOiBOKz45M8rdtF5fJN-7dQKWcJcVFUKxDo8dzAZwIJLrbIYTH6o=w2400'
          };
        });
        break;
      case "Eyes":
        this.setState(state => {
          const info = db.findByCategory("Eyes");
          return {
            myProduct: info,
            bg: 'https://lh3.googleusercontent.com/ouApqvg-cmxK8Qep-thhONh-qalx_oQ7qnJyRVhoJ-TUUG2F9vWQoNx-LHTeMJfv9F4=w2400'
          };
        });
        break;
      default:
        this.setState(state => {
          const info = db.findByCategory("Lips");
          return {
            myProduct: info,
            bg: 'https://lh4.googleusercontent.com/sj_y1oKK7c-yEBsjOiBOKz45M8rdtF5fJN-7dQKWcJcVFUKxDo8dzAZwIJLrbIYTH6o=w2400'
          };
        });
        break;
    }
  }

  componentDidMount() {
    this.getImages();
  }

  render() {
    return <ProductList bg={this.state.bg} myProduct={this.state.myProduct} />;
  }
}