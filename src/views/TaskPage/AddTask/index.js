import React, { Component } from 'react';
import './AddTask.scss';

import { toast } from 'react-toastify';

class AddTask extends Component {
  state = {
    task: '',
  };

  handleChangeTask = (e) => {
    this.setState({ task: e.target.value });
  };

  handleClick = () => {
    if (!this.state.task) {
      toast.error('Bạn chưa nhập công việc');
      return;
    }
    this.props.onAddTask({
      id: Math.floor(Math.random() * 10000),
      title: this.state.task,
    });
    // Remove text input
    this.setState({
      task: '',
    });
    toast.success('Thêm công việc thành công');
  };

  render() {
    return (
      <div className="add-task">
        <input
          placeholder="Enter your task..."
          className="add-task-input"
          type="text"
          value={this.state.task}
          onChange={(e) => this.handleChangeTask(e)}
        />
        <button onClick={this.handleClick} className="add-task-btn">
          Add
        </button>
      </div>
    );
  }
}

export default AddTask;
