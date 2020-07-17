import React from "react";
import productService from "../../services/product-service";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    productService
      .getCategoriesByGroupId(this.props.categoryid)
      .then((response) => {
        this.setState({
          categories: response.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    console.log(this.props);
    const { categories } = this.state;

    return <div>Products PAGE</div>;
  }
}
export default ProductPage;
