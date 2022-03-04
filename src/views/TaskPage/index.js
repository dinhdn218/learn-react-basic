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

  handleAddTask = (task) => {
    console.log(this);
    console.log(task);
    this.setState({
      tasks: [...this.state.tasks, task],
    });
  };

  render() {
    return (
      <div className="task-page">
        <AddTask onAddTask={this.handleAddTask} />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default TaskPage;
