
import {combineReducers,createStore} from 'redux'
import {QuanLyNguoiDungReducer} from './QuanLyNguoiDungReducer'


const rootReducer = combineReducers({
   QuanLyNguoiDungReducer
})

export const store = createStore(rootReducer);