import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './TaskPage.scss';

import { toast } from 'react-toastify';

class TaskPage extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { id: 1, title: 'Giặt quần áo' },
        { id: 2, title: 'Rửa bát' },
        { id: 3, title: 'Quét nhà' },
      ],
    };
  }

  // Hàm thêm công việc
  handleAddTask = (task) => {
    this.setState({
      tasks: [...this.state.tasks, task],
    });
    toast.success('Thêm thành công');
  };

  // Hàm sửa công việc
  handleEditTask = (taskIdEdit, titleEdit) => {
    const newListTaskAfterEdit = [...this.state.tasks];
    newListTaskAfterEdit.forEach((task) => {
      if (task.id === taskIdEdit) {
        task.title = titleEdit;
      }
    });
    this.setState({ tasks: newListTaskAfterEdit });
    toast.success('Sửa thành công');
  };

  // Hàm xóa công việc
  handleRemoveTask = (taskIdRemove) => {
    const newTasks = this.state.tasks.filter(
      (task) => task.id !== taskIdRemove
    );
    this.setState({ tasks: newTasks });
    toast.success('Xóa thành công');
  };

  render() {
    return (
      <div className="task-page">
        <AddTask onAddTask={this.handleAddTask} />
        <TaskList
          onEditTask={this.handleEditTask}
          onRemoveTask={this.handleRemoveTask}
          tasks={this.state.tasks}
        />
      </div>
    );
  }
}

export default TaskPage;
