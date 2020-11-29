import React, { Component } from 'react'
import CarouselLayout from './CarouselLayout'
import ProductList from './ProductList'
import SlidebarLayout from './SlidebarLayout'

export default class ContentLayout extends Component {
    render() {
        return (
            <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <SlidebarLayout/>
                </div>
                <div className="col-10">
                    <div className="row">
                    <div className="col-11">
                    <CarouselLayout/>
                    <ProductList/>
                    <ProductList/>
                        </div>
                    </div>
                    
                </div>
            </div>
             </div>
            
        )
    }
}
