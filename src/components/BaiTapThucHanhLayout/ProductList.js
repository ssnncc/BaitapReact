import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    render() {
        return (
        <div className="row text-center">
        <div className="col-lg-4 col-md-6 mb-4">
            <ProductItem/>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
        <ProductItem/>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
        <ProductItem/>
        </div>
        
        </div>

        )
    }
}
