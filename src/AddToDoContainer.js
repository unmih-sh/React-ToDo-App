import React, { PureComponent } from 'react';
class AddToDoContainer extends PureComponent {
  addToDoWrapper = () => {
    const toDoItemValue = this.inputToDoNode.value;
    this.props.addToDo(toDoItemValue);
    this.inputToDoNode.value = '';
  };
  handleEnterToAddToDo = event => {
    if (event.key !== 'Enter') {
      return;
    }
    this.addToDoWrapper();
  };
  render() {
    return (
      <div className="addToDoContainer">
        <input
          ref={node => (this.inputToDoNode = node)}
          onKeyDown={this.handleEnterToAddToDo}
          placeholder="Enter your To-Do here"
        />
      </div>
    );
  }
}
export default AddToDoContainer;
