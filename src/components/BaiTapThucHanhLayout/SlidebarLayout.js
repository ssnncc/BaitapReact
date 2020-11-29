import React, { Component } from 'react'

export default class SlidebarLayout extends Component {
    render() {
        return (
        <div className="text-center pt-4">
        <h4>SHOP NAME</h4>
        <ul className="nav flex-column ">
        <li className="nav-item border">
            <a className="nav-link " href="#">Category 1</a>
        </li>
        <li className="nav-item border">
            <a className="nav-link " href="#">Category 2</a>
        </li>
        <li className="nav-item border">
            <a className="nav-link" href="#">Category 3</a>
        </li>
        
        </ul>

        </div>

        )
    }
}
