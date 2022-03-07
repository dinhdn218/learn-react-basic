import React, { Component } from 'react';
import './TaskItem.scss';

class TaskItem extends Component {
  handleEditTask = () => {};

  handleRemoveTask = (id) => {
    this.props.onRemoveTask(id);
  };

  render() {
    const { id, title } = this.props;

    return (
      <div className="task-item">
        <p className="task-item-title">{title}</p>
        <div className="task-item-tool">
          <i
            onClick={this.handleEditTask}
            className="fa-solid fa-pen-to-square task-item-icon task-item-icon-edit"
          ></i>
          <i
            onClick={() => this.handleRemoveTask(id)}
            className="fa-solid fa-trash-can task-item-icon task-item-icon-delete"
          ></i>
        </div>
      </div>
    );
  }
}

export default TaskItem;
