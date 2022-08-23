import React from 'react';
import avatar from '../avatar.png'

const User = ({
  user,
  deleteUser,
}: {
  user: {
    id: number;
    avatar: string;
    first_name: string;
    last_name: string;
    email: string;
  };
  deleteUser: any;
}) => {
  let avatarImg = avatar;
  if (user.avatar.startsWith('http')) {
    avatarImg = user.avatar
  }
  return (
    <div className="col">
    <div className="card">
      <img src={avatarImg} className="card-img-top" alt="avatar" />
      <div className="card-body">
        <h5 className="card-title">First Name: {user.first_name}</h5>
        <h5 className="card-title">Last Name: {user.last_name}</h5>
        <p className="card-text">Email: {user.email}</p>
      </div>
      <div className="card-body">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => deleteUser(user.id)}
        >
          Delete
        </button>
      </div>
    </div>
    </div>
  );
};

export default User;
