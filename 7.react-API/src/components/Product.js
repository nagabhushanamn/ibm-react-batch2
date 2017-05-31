import React, { Component } from 'react';
import BuyComponent from './BuyComponent'
class Product extends Component {
    render() {
        let {product} = this.props;
        return (
            <div className="list-group-item">
                <h3>{product.name}</h3>
                <h4>{product.price}</h4>
                <p>{product.description}</p>
                
                <BuyComponent/>

            </div>
        );
    }
}

export default Product;