import React, { Component } from 'react'

export default class ThongtinMatkinh extends Component {
    render() {
        let {glasses,xemChiTiet} = this.props;
        return (
       
        <img className="w-100 border border-dark p-2" style={{
            height:"70px"
        }} onClick={()=>{this.props.xemChiTiet(glasses)}} src={glasses.url}/>
       
        )
    }
}
