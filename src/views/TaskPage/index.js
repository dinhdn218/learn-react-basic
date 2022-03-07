import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './TaskPage.scss';

class TaskPage extends Component {
  state = {
    tasks: [
      { id: 1, title: 'Giặt quần áo' },
      { id: 2, title: 'Rửa bát' },
      { id: 3, title: 'Quét nhà' },
    ],
  };

  // Hàm thêm công việc
  handleAddTask = (task) => {
    this.setState({
      tasks: [...this.state.tasks, task],
    });
  };

  // Hàm sửa công việc

  // Hàm xóa công việc
  handleRemoveTask = (taskIdRemove) => {
    console.log(taskIdRemove);
    const newTasks = this.state.tasks.filter(
      (task) => task.id !== taskIdRemove
    );
    this.setState({ tasks: newTasks });
  };

  render() {
    return (
      <div className="task-page">
        <AddTask onAddTask={this.handleAddTask} />
        <TaskList
          onRemoveTask={this.handleRemoveTask}
          tasks={this.state.tasks}
        />
      </div>
    );
  }
}

export default TaskPage;
