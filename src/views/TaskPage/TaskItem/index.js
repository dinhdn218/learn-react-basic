import React, { Component } from 'react';
import Icon from '../../../components/Icon';
import './TaskItem.scss';

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editTask: '',
      isEdit: false,
    };
  }

  // Hàm thực hiện chỉnh sửa
  performEditTask = () => {
    this.setState({ isEdit: !this.state.isEdit });
    this.setState({ editTask: this.props.title });
  };

  confirmSaveEditTask = () => {
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
          {/* {!isEdit ? (
            <i
              onClick={this.performEditTask}
              className="fa-solid fa-pen-to-square task-item-icon task-item-icon-edit"
            ></i>
          ) : (
            <i
              onClick={this.confirmSaveEditTask}
              className="fa-solid fa-check task-item-icon task-item-icon-save"
            ></i>
          )}
          <i
            onClick={() => this.handleRemoveTask(id)}
            className="fa-solid fa-trash-can task-item-icon task-item-icon-delete"
          ></i> */}
          {!isEdit ? <Icon edit /> : <Icon save />}
          <Icon remove />
        </div>
      </div>
    );
  }
}

export default TaskItem;
