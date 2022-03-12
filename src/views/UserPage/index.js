import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';
import './UserPage.scss';
import Loading from '../../components/Loading';

function UserPage() {
  const navigate = useNavigate();

  const [userList, setUserList] = useState();

  useEffect(() => {
    axios('https://reqres.in/api/users')
      .then((res) => {
        setUserList(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSeeUserDetail = (id) => {
    navigate(`/user/${id}`);
  };

  return (
    <div className="user-page">
      <h2 className="user-page-title">Trang User: Lấy thông tin User từ API</h2>
      <div className="user-list">
        {userList ? (
          userList.map((user) => (
            <div className="user-item" key={user.id}>
              <p className="user-item-name">{`${user.first_name} ${user.last_name}`}</p>
              <Icon info onSeeUserDetail={() => handleSeeUserDetail(user.id)} />
            </div>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default UserPage;
