import React, { Component } from 'react';
import TaskItem from '../TaskItem';

class TaskList extends Component {
  render() {
    return (
      <div className="task-list">
        {this.props.tasks.map((task) => {
          return (
            <TaskItem
              onRemoveTask={this.props.onRemoveTask}
              onEditTask={this.props.onEditTask}
              key={task.id}
              title={task.title}
              id={task.id}
            />
          );
        })}
      </div>
    );
  }
}

export default TaskList;
