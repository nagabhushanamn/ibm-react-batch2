import React, { Component } from 'react';
import Product from './Product';
import PropTypes from 'prop-types';

class ProductList extends Component {

    getChildContext() {
        return { color: this.props.color };
    }

    render() {

        let { products } = this.props;
        let productComps = products.map((product, idx) => {
            return <Product product={product} key={idx} />
        });

        return (
            <div className="list-group">
                {productComps}
            </div>
        );
    }
}

ProductList.childContextTypes = {
  color: PropTypes.string
};

export default ProductList;