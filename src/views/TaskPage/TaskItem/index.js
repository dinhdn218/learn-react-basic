import React, { Component } from 'react';
import './TaskItem.scss';

class TaskItem extends Component {
  state = {
    editTask: '',
    isEdit: false,
  };

  performEditTask = () => {
    this.setState({ isEdit: !this.state.isEdit });
    this.setState({ editTask: this.props.title });
    console.log(this.props.id);
  };

  saveEditTask = () => {
    this.setState({ isEdit: !this.state.isEdit });
    this.props.onEditTask(this.props.id, this.state.editTask);
  };

  handleRemoveTask = (id) => {
    this.props.onRemoveTask(id);
  };

  handleChangeEditTask = (e) => {
    this.setState({ editTask: e.target.value });
  };

  render() {
    const { id, title } = this.props;
    const { editTask, isEdit } = this.state;

    return (
      <div className="task-item">
        {!isEdit ? (
          <p className="task-item-title">{title}</p>
        ) : (
          <input
            className="task-item-input"
            value={editTask}
            onChange={(e) => this.handleChangeEditTask(e)}
          ></input>
        )}
        <div className="task-item-tool">
          {!isEdit ? (
            <i
              onClick={this.performEditTask}
              className="fa-solid fa-pen-to-square task-item-icon task-item-icon-edit"
            ></i>
          ) : (
            <i
              onClick={this.saveEditTask}
              className="fa-solid fa-check task-item-icon task-item-icon-save"
            ></i>
          )}
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
