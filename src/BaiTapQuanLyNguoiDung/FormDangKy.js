import React, { Component } from 'react'
import {connect} from 'react-redux'

 class FormDangKy extends Component {
   
    handleChangeInput =(event)=>{
      //Lấy giá trị value và name của người dùng
      let {value,name}= event.target;
    
      let typeInput = event.target.getAttribute('typeInput');//Lấy tên các thuộc tính tự thêm
      //Xử lý cập nhật values
      const newValues ={...this.props.nguoiDungRedux.values};
      newValues[name]= value;//Gán gtri mới nhập vào newValues
      //Xử lý errors rỗng
      const newErrors ={...this.props.nguoiDungRedux.errors};
      newErrors[name]=value.trim()===''? name +'Không được bỏ trống':'';
      //Xử lý định dạng email
      if(typeInput==='email'){
        const regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(!regexEmail.test(value)){
                newErrors[name]= name + 'Không đúng định dạng';
            }
      }
      if(typeInput==='soDienThoai'){
        const regexNumber = /^[0-9]+$/;
        if(!regexNumber.test(value)){
            newErrors[name]= name + 'Không đúng định dạng';
        }
      }
      // // setState lại
      // this.setState({
      //   values: newValues,
      //   errors: newErrors
      // },()=>{
      //   console.log("setState",this.props.nguoiDungRedux)
      // })
      this.props.dispatch({
        type:'SET_NGUOI_DUNG_REDUX',
        nguoiDungRedux:{
            values: newValues,
            errors: newErrors

        }
    })

    }

    handleSumit =(event)=>{
      event.preventDefault()//Chặn sự kiện submit khi người dùng submit bằng reactform
      // Kiểm tra hợp lệ mới submit 
      let valid = true;
      for( let key in this.props.nguoiDungRedux.values){
        if(this.props.nguoiDungRedux.values[key].trim()===''){
          valid= false;
        }
      }
      for(let key in this.props.nguoiDungRedux.errors){
        if(this.props.nguoiDungRedux.errors[key] !== ''){
            valid= false;
        }
      }
      if(!valid){
        alert("Dữ liệu nhập vào không hợp lệ");
        return;
      }
      //Nếu đúng thì cho thêm dữ liệu
      this.props.dispatch({
        type: 'THEM_NGUOI_DUNG',
        nguoiDung: this.props.nguoiDungRedux.values
      })
    }
    
  render() {
    let {taiKhoan,matKhau,email,soDienThoai,hoTen,maThe}= this.props.nguoiDungRedux.values;
    return (
      <form className="card text-center" onSubmit={this.handleSumit}>
      <div className="card-header bg-dark text-white">
        FORM ĐĂNG KÝ
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <h5>Tài khoản</h5>
              <input className="form-control" name="taiKhoan" onChange={this.handleChangeInput} value={taiKhoan}/>
              <p className="text-danger">{this.props.nguoiDungRedux.errors.taiKhoan}</p>
            </div>
            <div className="form-group">
              <h5>Mat khẩu</h5>
              <input className="form-control" name="matKhau" onChange={this.handleChangeInput} value={matKhau}/>
              <p className="text-danger">{this.props.nguoiDungRedux.errors.matKhau}</p>
            </div>
            <div className="form-group">
              <h5>Email</h5>
              <input className="form-control" name="email" typeInput="email" onChange={this.handleChangeInput} value={email}/>
              <p className="text-danger">{this.props.nguoiDungRedux.errors.email}</p>
            </div>
          </div>
          <div className="col-6">
          <div className="form-group">
              <h5>Họ tên</h5>
              <input className="form-control" name="hoTen" onChange={this.handleChangeInput} value={hoTen} />
              <p className="text-danger">{this.props.nguoiDungRedux.errors.hoTen}</p>
            </div>
            <div className="form-group">
              <h5>Số điện thoại</h5>
              <input className="form-control" name="soDienThoai" typeInput="soDienThoai" onChange={this.handleChangeInput} value={soDienThoai}/>
              <p className="text-danger">{this.props.nguoiDungRedux.errors.soDienThoai}</p>
            </div>
            <div className="form-group">
              <h5>Loại Khách hàng</h5>
              <select class="form-control" value={maThe} onChange={this.handleChangeInput} name="maThe">
                <option >Khách hàng</option>
                <option >Khách hàng bạc</option>
                <option >Khách hàng vàng</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="btn btn-success" type="submit">
          THÊM KHÁCH HÀNG
        </button>
        <button className="btn btn-primary ml-3" type="button" onClick={()=>{
          this.props.dispatch({
            type:'CAP_NHAT_NGUOI_DUNG'
          })
        }}>CHỈNH SỬA</button>
      </div>
    </form>
    )
  }
}

const mapStateToProps =(state)=>{
  return{
    nguoiDungRedux : state.QuanLyNguoiDungReducer.nguoiDungRedux
  }
}
export default connect(mapStateToProps)(FormDangKy);