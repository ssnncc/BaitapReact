import Axios from "axios";
import React, { Component } from "react";

export default class BaiTapReactAPI extends Component {
  state = {
    tastList: [],
    values: {
      taskName: "",
    },
  
  };
  getTaskList = () => {
    let promise = Axios({
      url: `http://svcy.myclass.vn/api/ToDoList/GetAllTask`,
      method: "GET",
    });
    promise.then((result) => {
      console.log(result.data);
      this.setState({
        tastList: result.data,
      });
    });
    promise.catch((err) => {
      console.log(err.response.data);
    });
  };

 deleteTask =(tasKName)=>{
     let promise = Axios({
         url:`http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${tasKName}`,
         method:'DELETE'
     });
     promise.then((result)=>{
         this.getTaskList();
     })
     promise.catch((errors)=>{
         alert(errors.response.data);
     })
 }

 doneTask =(taskName)=>{
     let promise = Axios({
         url:`http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
         method: 'PUT'
     })
     promise.then((result)=>{
        alert (result.data )
        this.getTaskList();
     })
 }
  renderTaskToDo = () => {
    return this.state.tastList
      .filter((item) => !item.status)
      .map((item, index) => {
        return (
          <li key={index} className="d-flex">
            <span style={{ border: "1px solid white", width: "500px" }}>
              {item.taskName}
            </span>
            <div>
              <button onClick={()=>{
                  this.deleteTask(item.taskName);
              }}><i className="fa fa-trash-alt"></i></button>
              <button onClick={()=>{
                  this.doneTask(item.taskName)
              }}><i class="fa fa-check-circle"></i></button>
            </div>
          </li>
        );
      });
  };
  resetTask =(taskName)=>{
      let promise = Axios({
            url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
            method: 'PUT'
      })
      promise.then((result)=>{
        alert (result.data )
        this.getTaskList();
     })
  }
  renderTaskComplete = () => {
    return this.state.tastList
      .filter((item) => item.status)
      .map((item, index) => {
        return (
          <li key={index} className="d-flex">
            <span style={{ border: "1px solid white", width: "500px" }}>
              {item.taskName}
            </span>
            <div>
            <button onClick={()=>{
                  this.deleteTask(item.taskName);
              }}><i className="fa fa-trash-alt"></i></button>
              <button onClick={()=>{
                  this.resetTask(item.taskName);
              }}><i class="fa fa-undo"></i></button>
            </div>
          </li>
        );
      });
  };
  componentDidMount() {
    this.getTaskList();
  }
  handleChange = (e) => {
    let { value, name } = e.target;
    let newValues = { ...this.state.values };
    newValues = { ...newValues, [name]: value };
    

    this.setState({
      ...this.state,
      values: newValues,
     
    });
  };
  addTask = (e) => {
    e.preventDefault();
    console.log(this.state.values.taskName)
    let promise =Axios({
        url:`http://svcy.myclass.vn/api/ToDoList/AddTask`,
        method:'POST',
        data: {taskName:this.state.values.taskName}
    })
    promise.then((result)=>{
        console.log(result.data);
        this.getTaskList();
    })
    promise.catch((errors)=>{
        console.log(errors.response.data);
    })
  };
  render() {
    return (
        <div className="container bg-dark text-light">
<form onSubmit={this.addTask} >
        <div className="card text-left bg-dark">
          <button className="bg-dark text-white" style={{border:'1px solid white'}}
            onClick={() => {
              this.getTaskList();
            }}
          >
            Dark theme
          </button>
          <div className="card-body bg-dark">
            <h3>To do list</h3>
            <div className="">
              <input
                name="taskName"
                onChange={this.handleChange}
                id="newTask"
              />
              
              <button type="submit">Add Task</button>
            </div>
            <h3>Task to do</h3>
            <ul style={{ listStyle: "none" }}>{this.renderTaskToDo()}</ul>

            <h3>Task completed</h3>
            <ul style={{ listStyle: "none" }}>{this.renderTaskComplete()}</ul>
          </div>
        </div>
      </form>
        </div>
      
    );
  }
}
