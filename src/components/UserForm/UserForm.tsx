import React from 'react';
import { IUser } from '../UsersList/IUser';

const UserForm = ({user, addUser, onChangeUserData} : {user: any, addUser: any, onChangeUserData:any}) => {
  return (
    <form className="mb-3 bg-light p-3 w-50 mx-auto"
        onSubmit={(event) => addUser(event)}>
            {Object.keys(user).map(field => {
                if (field === "id") return;
                return <div className="mb-3" key={field}>
                      <input type="text" className="form-control" id={field} required
                    placeholder={field}
                    value={user[field as keyof Omit<IUser, 'id'>]}
                    onChange={(event) => onChangeUserData(event)}/>
                </div>
            })}        
            <button type="submit" className="btn btn-primary">Add</button>
      </form>
  )
};

export default UserForm;