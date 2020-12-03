import React, { Component } from 'react'

export default class ModalGiohang extends Component {
    render() {

      const {gioHang,xoaGioHang, tangGiamSoLuong}=this.props;
        return (
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">GIỎ HÀNG</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                 <table className="table">
                   <thead>
                   <tr>
                     <td>Mã SP</td>
                     <td>Hình ảnh</td>
                     <td>Tên SP</td>
                     <td>Đơn giá</td>
                     <td>Số lượng</td>
                     <td>Thành tiền</td>
                   </tr>
                   </thead>
                  <tbody>
                  {gioHang.map((sp,index)=>{
                     return (
                       <tr key={index}>
                         <td>{sp.maSP}</td>
                         <td><img src={sp.hinhAnh} width="50px" height="50px"/></td>
                         <td>{sp.tenSP}</td>
                         <td>{sp.giaBan.toLocaleString()}</td>
                         <td>
                          <button className="bg-primary text-white" onClick={()=>tangGiamSoLuong(sp.maSP,true)}>+</button>
                            {sp.soluong}
                          <button className="bg-primary text-white" onClick={()=>tangGiamSoLuong(sp.maSP,false)}>-</button>
                           
                         </td>
                         <td>{(sp.soluong *sp.giaBan).toLocaleString()}</td>
                         <td><button className="btn btn-danger " onClick={()=> xoaGioHang(sp.maSP)}>Xóa</button></td>
                       </tr>
                     )
                   })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="5">  </td>
                      <td>Tổng tiền </td>
                      <td>
                        {this.props.gioHang.reduce((tongTien,sp,index)=>{
                          return tongTien += sp.soluong * sp.giaBan
                        },0).toLocaleString()}
                      </td>
                    </tr>
                  </tfoot>
                   
                 </table>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                 
                </div>
              </div>
            </div>
          </div>
        )
    }
}
