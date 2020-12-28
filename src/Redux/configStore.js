
import {QuanLyNguoiDungReducer} from './QuanLyNguoiDungReducer'
import {applyMiddleware, combineReducers, createStore} from 'redux';
import reduxThunk from 'redux-thunk'


const rootReducer = combineReducers({
   QuanLyNguoiDungReducer,
})

export const store = createStore(rootReducer,applyMiddleware(reduxThunk));