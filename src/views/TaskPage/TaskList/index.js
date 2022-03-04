import React, { Component } from 'react';
import TaskItem from '../TaskItem';

class TaskList extends Component {
  render() {
    return (
      <div className="task-list">
        {this.props.tasks.map((task) => {
          return <TaskItem key={task.id} title={task.title} />;
        })}
      </div>
    );
  }
}

export default TaskList;
