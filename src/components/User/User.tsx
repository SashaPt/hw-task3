import React from 'react';
import avatar from '../avatar.png';

const User = ({user, deleteUser} : {user:{id: number, firstName: string, lastName: string, email: string}, deleteUser: any}) => {
  return (
    <div className="card">
                    <img src={avatar} className="card-img-top" alt="avatar"/>
                    <div className="card-body">
                        <h5 className="card-title">{user.firstName}</h5>
                        <h5 className="card-title">{user.lastName}</h5>
                        <p className="card-text">{user.email}</p>
                    </div>
                    <div className="card-body">
                        <button type="button" className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
                    </div>
                </div>
  )
};

export default User;