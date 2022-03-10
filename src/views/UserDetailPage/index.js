import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Icon from '../../components/Icon';
import './UserDetailPage.scss';

function UserDetailPage() {
  const params = useParams();

  const navigate = useNavigate();

  const currentUserId = params.userId;

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    axios(`https://reqres.in/api/users/${currentUserId}`)
      .then((res) => {
        setCurrentUser(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [currentUserId]);

  const handleGoBackPrevPage = () => {
    navigate(-1);
  };

  return (
    !currentUser || (
      <div className="user-detail-page">
        <h2 className="user-detail-title">Chi tiết User: {currentUser.id}</h2>
        <p className="user-detail-info">First name: {currentUser.first_name}</p>
        <p className="user-detail-info">Last name: {currentUser.last_name}</p>
        <p className="user-detail-info">Email: {currentUser.email}</p>
        <Icon back onGoBackPrevPage={handleGoBackPrevPage} />
      </div>
    )
  );
}

export default UserDetailPage;
