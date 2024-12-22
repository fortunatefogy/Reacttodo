import React, { Component } from 'react'
import "./TodoApp.css";

export default class TodoApp extends Component {

    state={
        input:"",
        items:[]
    }
    storeItems=(event)=>{
        event.preventDefault();
        const{input}=this.state;
        

        this.setState({
            items:[...this.state.items,input],
            input:""
        });




    }

    deleteItem=(key)=>{
        const allItens=this.state.items;
        allItens.splice(key,1);
        this.setState({
            items:allItens
        })




    };



    handleChange=event=>{
        this.setState({
            input:event.target.value
        });
       
    };
  render() {
    const{input,items}=this.state;
    console.log(items);

    return (
      <form onSubmit={this.storeItems}  className='todo-container'>
        <h1>Todo App</h1>
        <div className='input-section'>
            <input value={input} onChange={this.handleChange} type="text" placeholder="Enter a task"/>
            {/* <button>Add Task</button> */}
        </div>
        <ul>
            {
                items.map((data,index)=>(
                    <li key={index}>{data}<i onClick={()=>this.deleteItem(index)} className="fa-solid fa-trash-can"></i></li>

                ))
            }
            
        </ul>
      </form>
    )
  }
}
