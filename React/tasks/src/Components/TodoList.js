import React, { useState } from 'react';
import Todo from "./Todo"

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }
    componentDidMount() {
        fetch("http://localhost:4000/tasks",{
            method: "GET",
        })
          .then((res)=> res.json())
          .then(
              (tasks) => {
                  console.log(tasks)
                  this.setState({
                      todos: tasks.todos
                  })
              }
          )
    }


    render() {
        const todos = this.state;
        return(
            <div>
                <div className="taskInput">
                    <form action={"http://localhost:4000/tasks"} method="POST" id="taskForm">
                        <input id="taskDescription"
                            type="text"
                            name="description"
                            placeholder="I have to..."
                            className="form-control"></input>
                        <input type="submit" value="Add" className="btn btn-success" id="taskBtn"></input>
                    </form>
                </div>
                <div className="todoContainer">
                    {todos.todos.map((todo) => (
                        <Todo id={todo.id} description={todo.description} status={todo.status}/>
                    ))}
                </div>
            </div>
        );
        
    };
}

export default TodoList;