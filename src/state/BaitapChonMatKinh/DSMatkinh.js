import React, { Component } from 'react'
import ThongtinMatkinh from './ThongtinMatkinh';
import './BaitapMatkinh.css';
export default class DSMatkinh extends Component {
    arrProduct =[
        { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. '},
        { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './img/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 4, price: 30, name: 'DIOR D6005U', url:  './img/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 5, price: 30, name: 'PRADA P8750', url: './img/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 6, price: 30, name: 'PRADA P9700', url: './img/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 7, price: 30, name: 'FENDI F8750', url: './img/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 8, price: 30, name: 'FENDI F8500', url: './img/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 9, price: 30, name: 'FENDI F4300', url: './img/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    ];
    renderMatkinh = ()=>{
        return this.arrProduct.map((glasses,index)=>{
          return <div key={index} className ="col-2 mt-3">
              <ThongtinMatkinh xemChiTiet={this.xemChiTiet} glasses={glasses}/>
           
          </div>
        })
      }
      state ={
        glassesDetail:{
          price: 30,
          name: "GUCCI G8850U",
          url: "./img/v1.png",
          desc:
            "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        }
      }
      xemChiTiet=(newGlassesDetail)=>{
        this.setState({
          glassesDetail: newGlassesDetail
        })
    
      }
    render() {
        return (
            <div className="glass">
            <h3 className="text-center text-white title_glass p-3">TRY GLASS APP ONLINE</h3>
            <div className="glass__content mt-5">
                <div className="container">
                    <div className="d-flex justify-content-around">
                        <div className="picture">
                            <img src="./img/model.jpg" width="260" />
                            <div className="matkinh">
                                <img src={this.state.glassesDetail.url} width="140" />
                            </div>
                            <div className="thongTin">
                                <h6 className="text-primary">
                                 {this.state.glassesDetail.name} 
                                </h6>
                                <p className="text-white">{this.state.glassesDetail.desc}</p>
        
                               
                            </div>
                        </div>
                        <div className="picture">
                            <img src="./img/model.jpg" width="260" />
                        </div>
                    </div>
                    <div className="option_choose ">
                        <div className="row mt-3  bg-white p-3">
                            {this.renderMatkinh()}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
        
    }
}
