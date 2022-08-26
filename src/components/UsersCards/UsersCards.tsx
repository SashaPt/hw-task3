import React, { Dispatch, SetStateAction } from 'react';
import http from '../../http';
import Loader from '../Loader/Loader';
import UserCard from '../UserCard/UserCard';
import { IUser } from '../Users/IUser';

const UsersCards = ({ users, setUsers }: { users: IUser[], setUsers: Dispatch<SetStateAction<IUser[]>> }) => {
    const deleteUser = async (id: number) => {
        const confirmDelete = window.confirm(
          'Do you really want to delete this user?'
        );
        if (confirmDelete) {
            try {
                const deletedUser = await http.delete(`users/${id}`);
                if (deletedUser) {
                    setUsers(users.filter((user) => id !== user.id));
                } 
            } catch (e) {
                console.log(e)
            }
        }
      };
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {users.length ? (
        users.map((user) => (
          <UserCard user={user} deleteUser={deleteUser} key={user.id} />
        ))
      ) : (
        <Loader color="text-secondary" />
      )}
    </div>
  );
};

export default UsersCards;
