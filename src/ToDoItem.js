import React, { Component } from 'react';
import '../styles/stylesheet.css';

class ToDoItem extends Component {
  deleteToDoItem = () => {
    const { id, itemName } = this.props.toDoItem;
    this.props.deleteToDo(id, itemName);
  };

  changeStatusOfToDo = () => {
    const { id } = this.props.toDoItem;
    this.props.changeStatus(id);
  };

  render() {
    const { done, itemName } = this.props.toDoItem;
    return (
      <div className="toDoItemContainer">
        <input
          type="checkbox"
          defaultChecked={done}
          onChange={this.changeStatusOfToDo}
        />
        <span className={done ? 'toDoItemDone' : ''}>{itemName}</span>
        <button onClick={this.deleteToDoItem} children="X" />
      </div>
    );
  }
}

export default ToDoItem;
