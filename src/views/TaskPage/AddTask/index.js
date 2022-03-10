import React, { Component } from 'react';
import { toast } from 'react-toastify';
import './AddTask.scss';

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    };
  }

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
