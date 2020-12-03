import React, { Component } from 'react'

export default class Sanpham extends Component {
    render() {
        const {sanPham,themGioHang,xemChitietSP}= this.props;
       
        return (
            <div className="card text-left">
                  <img className="card-img-top" src={sanPham.hinhAnh} height="300" alt="123" />
                      <div className="card-body">
                         <h4 className="card-title">{sanPham.tenSP}</h4>
                         <button className="btn btn-success" onClick={()=>xemChitietSP(sanPham)} >Xem chi tiết</button>
                         <button className="btn btn-danger ml-3" onClick={()=>themGioHang(sanPham)}>Thêm vào giỏ hàng</button>
                         {/* <button className="btn btn-success" onClick={()=> onViewDetail(sanPham)}>Xem chi tiết</button> */}
                          
                       {/*  <button className="btn btn-danger ml-3" onClick={()=>onAddToCart(prod)}>Thêm vào giỏ hàng</button> */}
                      </div>
                </div>

        )
    }
}
