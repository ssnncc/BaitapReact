import React, { Component } from 'react'
import ContentLayout from './ContentLayout'
import FooterLayout from './FooterLayout'
import Headerlayout from './Headerlayout'

export default class BaitapLayout extends Component {
    render() {
        return (
            <div>
            <Headerlayout/>
            <ContentLayout/>
            <FooterLayout/>
            </div>
            
        )
    }
}
