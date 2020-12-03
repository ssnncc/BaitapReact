import React, { Component } from 'react'
import Sanpham from './Sanpham';

export default class DanhsachSanPham extends Component {
   
    

    render() {
        const {mangSanPham,themGioHang,sanPham,xemChitietSP} = this.props;
        
       
        return ( <div className = "container" >
            <div className = "row" >
                 { mangSanPham.map((sanPham, index) => {
                    return ( < div className = "col-4" key={index} >
                        <Sanpham sanPham = { sanPham }
                         themGioHang={ themGioHang }
                         xemChitietSP={ xemChitietSP}
                        />
                        </div >
                    )
                })}
                 </div>
                <div className="row  mt-5">
                <div className="col-6">
                    <h5 className="ml-5">{sanPham.tenSP}</h5>
                    <img src={sanPham.hinhAnh} height="300" width="350"/>
                </div>
                <div className="col-6">
                <h5 className="text-center">Thông số kỹ thuật</h5>
                    <table className="table">
                        <tr>
                            <th>Màn hình</th>
                            <td>{sanPham.manHinh}</td>
                        </tr>
                        <tr>
                            <th>Hệ điểu hành</th>
                            <td>{sanPham.heDieuHanh}</td>
                        </tr>
                        <tr>
                            <th>Camera trước</th>
                            <td>{sanPham.cameraTruoc}</td>
                        </tr>
                        <tr>
                            <th>Camera sau</th>
                            <td>{sanPham.cameraSau}</td>
                        </tr>
                        <tr>
                            <th>RAM</th>
                            <td>{sanPham.ram}</td>
                        </tr>
                        <tr>
                            <th>ROM</th>
                            <td>{sanPham.rom}</td>
                        </tr>
                    </table>
                </div>
            </div>

            </div>
        )
    }
}