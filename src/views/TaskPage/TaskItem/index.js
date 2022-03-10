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

  handleRemoveTask = () => {
    this.props.onRemoveTask(this.props.id);
  };

  handleChangeEditTask = (e) => {
    this.setState({ editTask: e.target.value });
  };

  render() {
    const { title } = this.props;
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
            <Icon edit onPerformEditTask={this.performEditTask} />
          ) : (
            <Icon save onConfirmSaveEditTask={this.confirmSaveEditTask} />
          )}
          <Icon remove onRemoveTask={this.handleRemoveTask} />
        </div>
      </div>
    );
  }
}

export default TaskItem;
