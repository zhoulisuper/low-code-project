//Page组件下的index.js组件
import React, { Component } from 'react'
import {inject,observer} from 'mobx-react';

@inject('store')
@observer
export default class Pages extends Component {

    // 增加一条todo
    addTodo = () => {       
        this.props.store.addTodos("一条任务");
    }
    // 删除一条todo
    deleteTodo = () => {
        this.props.store.deleteTodos();
    }
    // 重置todos
    resetTodo = () => {
        this.props.store.resetTodos();
    }
      
    render() {        
        return (
            <div>
                <h1>react-mobx使用demo</h1>
                <button onClick={this.addTodo}>add</button> &nbsp;
                <button onClick={this.deleteTodo}>delete</button> &nbsp;
                <button onClick={this.resetTodo}>reset</button>
                <br/> 
                <div >           
                    {                   
                        this.props.store.todos.map((ele,index) => {
                            return (                            
                                <div key={index}>{ele}</div>
                            );
                        })
                    }   
                </div>                 
            </div> 
        )
    }
}

