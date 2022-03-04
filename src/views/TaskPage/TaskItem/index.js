import React, { Component } from 'react';
import './TaskItem.scss';

class TaskItem extends Component {
  render() {
    return (
      <div className="task-item">
        <p className="task-item-title">{this.props.title}</p>
        <div className="task-item-tool">
          <i className="fa-solid fa-pen-to-square task-item-icon task-item-icon-edit"></i>
          <i className="fa-solid fa-trash-can task-item-icon task-item-icon-delete"></i>
        </div>
      </div>
    );
  }
}

export default TaskItem;
