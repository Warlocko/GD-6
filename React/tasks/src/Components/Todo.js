import React from "react";

class Todo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            description: this.props.description,
            status: this.props.status
        }
    }

    onChange(e) {
        this.setState({
            description: e.target.value,
        });
    }

    render() {
        return(
            <div className="taskCard">
                <div className={`todo ${this.state.status=="done" ? "completed":""}`}>
                    <p className="cardText">Id: {this.state.id}</p>
                    <p className="cardText">Task: {this.state.description}</p>
                    <div className="btn-container">
                          <form action={"http://localhost:4000/tasks/"+this.state.id+"/done/"} className={`${this.state.status=="done" ? "done":""}`} method="POST">
                                <input type="submit" value="Done" className="btn btn-success"></input>
                            </form>
                            <form action={"http://localhost:4000/tasks/"+this.state.id} method="POST">
                                <input type="submit" value="Delete" className="btn btn-danger"></input>
                            </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo;