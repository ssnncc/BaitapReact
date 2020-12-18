import React, { Component } from 'react'
import {connect} from 'react-redux'

class TableDanhSachNguoiDung extends Component {
    renderNguoiDung =()=>{
        return this.props.mangNguoiDung.map((kh,index)=>{
            return <tr key={index}>
                <td>{kh.taiKhoan}</td>
                <td>{kh.hoTen}</td>
                <td>{kh.matKhau}</td>
                <td>{kh.email}</td>
                <td>{kh.soDienThoai}</td>
                <td>{kh.maThe}</td>
                <td>
                <button className="btn btn-danger" onClick={()=>{
                                    this.props.dispatch({
                                        type: 'XOA_NGUOI_DUNG',
                                        taiKhoan: kh.taiKhoan
                                    })
                                }}>Xóa</button>
                <button className="btn btn-primary" onClick={()=>{
                    this.props.dispatch({
                        type:'SUA_NGUOI_DUNG',
                        nguoiDungSua: kh
                    })
                }}>Sửa</button>
                </td>
            </tr>
        })
    }
    render() {
        return (
            <div>
                <table className="table mt-5" border="1">
                    <thead>
                        <tr className="bg-dark text-white">
                            <th>Tài khoản</th>
                            <th>Họ và tên</th>
                            <th>Mật khẩu</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Loại thẻ</th>
                            <th>
                                
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderNguoiDung()}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps =(state)=>({
    
    mangNguoiDung : state.QuanLyNguoiDungReducer.mangNguoiDung
})
export default connect(mapStateToProps)(TableDanhSachNguoiDung)
