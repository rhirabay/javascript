import ToDo from "./ToDo";
import React from "react";

class ToDoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toDoList: props.toDoList
    }
  }

  render() {
    return (
      <ul>
        {this.state.toDoList.map(todo => <ToDo toDo={todo} key={todo} />)}
      </ul>
    )
  }
}

export default ToDoList