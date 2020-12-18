const stateDefault ={
    mangNguoiDung: [
        {taiKhoan: "1",matKhau:"123",hoTen: "Nguyễn Văn A", email:"nguyenvana@gmail.com", soDienThoai: '093939939393',maThe:'Khách hàng bạc'},
        {taiKhoan: "2",matKhau:"123",hoTen: "Nguyễn Văn B", email:"nguyenvanb@gmail.com", soDienThoai: '093939939393',maThe:'Khách hàng vàng'},
        {taiKhoan: "3",matKhau:"123",hoTen: "Nguyễn Văn C", email:"nguyenvanc@gmail.com", soDienThoai: '093939939393',maThe:'Khách hàng'},
    ],
    nguoiDungSua:{
         taiKhoan: "",
         matKhau: "",
         hoTen: "",
         email: "",
         soDienThoai: "",
         maThe: "",
    },
    nguoiDungRedux :{
            values :{
              taiKhoan:'',
              matKhau:'',
              hoTen:'',
              email:'',
              soDienThoai:'',
              maThe:'',
       
            },
            errors: {
             taiKhoan:'',
             matKhau:'',
             hoTen:'',
             email:'',
             soDienThoai:'',
             maThe:'',
            }
    }
    
}
export const QuanLyNguoiDungReducer =(state = stateDefault,action)=>{
    switch(action.type){
        case 'THEM_NGUOI_DUNG':{
         
            const mangNguoiDungCapNhat =[...state.mangNguoiDung,state.nguoiDungRedux.values];
            return {...state,mangNguoiDung: mangNguoiDungCapNhat};

        }
        case 'XOA_NGUOI_DUNG':{
            let mangNguoiDungCapNhat =[...state.mangNguoiDung];
            mangNguoiDungCapNhat = mangNguoiDungCapNhat.filter(kh=>kh.taiKhoan !== action.taiKhoan);
            //set lại state
            state.mangNguoiDung= mangNguoiDungCapNhat;
            return {...state};
        }
        case 'SET_NGUOI_DUNG_REDUX':{
            state.nguoiDungRedux= action.nguoiDungRedux;
            
            return{...state};
        }
        case 'SUA_NGUOI_DUNG':{
            //Cập nhật lại state
            state.nguoiDungSua ={...action.nguoiDungSua};
          
            //Cập nhật lại state của formredux
            let newNguoiDung ={...state.nguoiDungRedux}
            newNguoiDung.values ={...action.nguoiDungSua}
            return {...state,nguoiDungRedux: newNguoiDung};
        }
        case 'CAP_NHAT_NGUOI_DUNG':{
            const mangNguoiDungCapNhat =[...state.mangNguoiDung];
            let nguoiDungCapNhat = mangNguoiDungCapNhat.find(nd=>nd.taiKhoan===state.nguoiDungRedux.values.taiKhoan);
            if(nguoiDungCapNhat){
                nguoiDungCapNhat.matKhau= state.nguoiDungRedux.values.matKhau;
                nguoiDungCapNhat.hoTen = state.nguoiDungRedux.values.hoTen;
                nguoiDungCapNhat.email= state.nguoiDungRedux.values.email;
                nguoiDungCapNhat.soDienThoai= state.nguoiDungRedux.values.soDienThoai;
                nguoiDungCapNhat.maThe= state.nguoiDungRedux.values.maThe;
            }
            state.mangNguoiDung = mangNguoiDungCapNhat;
            return {...state};
        }
        
    }
    return {...state};
}