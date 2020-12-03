import React, { Component } from 'react'
import DanhsachSanPham from './DanhsachSanPham'
import ModalGiohang from './ModalGiohang'
import Dienthoai from '../Data/Dienthoai.json'

export default class BaitapGioHang extends Component {
    
    constructor(props){
        super(props);
        this.state={
            gioHang:[{
                
                    "maSP": 1,
                    "tenSP": "VinSmart Live",
                    "giaBan": 5700000,
                    "hinhAnh": "./img/vsphone.jpg",
                    "soluong":1,    
            }],
            chitietSP:Dienthoai[0],
        }
    }

    xemChitietSP =(sanPham)=>{
        // console.log(sanPham)
        this.setState({
            chitietSP:sanPham,
        })
    }

    //Lấy dữ liệu tại componentBaitapGioHang
    //Thêm giỏ hàng
    themGioHang=(sanphamChon)=>{
        // console.log(sanphamChon);
        //Từ sp chọn tạo ra sp giỏ hàng
        let spGioHang ={
            maSP:sanphamChon.maSP,
            tenSP: sanphamChon.tenSP,
            giaBan: sanphamChon.giaBan,
            hinhAnh: sanphamChon.hinhAnh,
            soluong: 1
        }
       //Kiểm tra sản phẩm chọn có trong giỏ hàng chưa
       var gioHangCapNhat=[...this.state.gioHang];
       let index = gioHangCapNhat.findIndex(sp=>sp.maSP===spGioHang.maSP);
       if(index!== -1){//Sản phảm đã có trong giỏ hàng
           gioHangCapNhat[index].soluong +=1;
       }else{//Nếu sản phẩm chưa có trong giỏ hàng
           gioHangCapNhat.push(spGioHang);
       }
       //Set state để component render lại
       this.setState({
           gioHang:gioHangCapNhat
       })
    }

    //Đặt sự kiện xóa giỏ hàng:
    xoaGioHang=(maSP)=>{
        // //CÁCH 1
        // //Tìm trong giỏ hàng có mã sp được click xóa
        // var gioHangCapNhat =[...this.state.gioHang];
        // let index = gioHangCapNhat.findIndex(sp=>sp.maSP===maSP);
        // if(index !==-1){
        //     gioHangCapNhat.splice(index,1);
        // }
        // //Cập nhật lại state giỏ hàng và render giao diện
        // this.setState({
        //     gioHang:gioHangCapNhat
        // })

        //CÁCH 2: 
        var gioHangCapNhat =this.state.gioHang.filter(sp=>sp.maSP !==maSP);
        this.setState({
            gioHang:gioHangCapNhat
        })
    }
    tangGiamSoLuong = (maSP,tangGiam) => {
        //tangGiam ===true: Tăng số lượng, false: giảm số lượng
        //Xử lý
        var gioHangCapNhat =[...this.state.gioHang];
        let index = gioHangCapNhat.findIndex(sp=>sp.maSP===maSP);
        if(tangGiam){
            gioHangCapNhat[index].soluong += 1;
        }else{
            if(gioHangCapNhat[index].soluong > 1){
                gioHangCapNhat[index].soluong -=1 ;
            }
            
            
        }
        //Cập nhật state và render lại giỏ hàng
        this.setState({
            gioHang:gioHangCapNhat
        })

    }

    render() {
        let tongSoLuong= this.state.gioHang.reduce((tongSL,sp,index)=>{
            return tongSL+=sp.soluong;

        },0)
        return (
            <div className="container">
                
               <ModalGiohang gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong}/>
               <h3 className="text-center p-3 text-success">BÀI TẬP GIỎ HÀNG</h3>
               <div className="text-right">
                    <span style={{cursor:'pointer',fontWeight:'bold'}} className="text-danger" data-toggle="modal" data-target="#modelId">Giỏ hàng ({tongSoLuong})</span>
               </div>
               <DanhsachSanPham mangSanPham ={ Dienthoai } sanPham={this.state.chitietSP}  themGioHang={this.themGioHang} xemChitietSP={this.xemChitietSP} />
            </div>
        )
    }
}
