import React, { Component } from 'react';
import axios from 'axios';

import Icon from '../../components/Icon';
import './UserPage.scss';

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
    };
  }

  componentDidMount = () => {
    axios('https://reqres.in/api/users')
      .then((res) => {
        this.setState({
          userList: res.data.data,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { userList } = this.state;
    return (
      <div className="user-page">
        <h2 className="user-page-title">
          Trang User: Lấy thông tin User từ API
        </h2>
        <div className="user-list">
          {userList &&
            userList.map((user) => (
              <div className="user-item" key={user.id}>
                <p className="user-item-name">{`${user.first_name} ${user.last_name}`}</p>
                <Icon info />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default UserPage;
