import logo from './logo.svg';
import './App.css';
import BaitapLayout from './components/BaiTapThucHanhLayout/BaitapLayout';
import DSMatkinh from './state/BaitapChonMatKinh/DSMatkinh';
import BaitapGioHang from './Props/BaitapGioHang/BaitapGioHang';
import BaiTapQuanLyNguoiDung from './BaiTapQuanLyNguoiDung/BaiTapQuanLyNguoiDung';
import BaiTapReactAPI from './BaiTapReactAPI/BaiTapReactAPI';



function App() {
  return (
    //Đây là của bài tập 1: Dàn layout
    // <BaitapLayout/>
    //Đây là của bài tập 2: state map
    //  <DSMatkinh/>
    //ĐÂY là bài tập giỏ hàng
    // <BaitapGioHang/>
    //ĐÂY LÀ BÀI TẬP Redux QUẢN LÝ NGƯỜI DÙNG
    // 
    // Đây là bài tập React API 
    <BaiTapReactAPI/>
  );
}

export default App;
