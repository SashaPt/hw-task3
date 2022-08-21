import React, {ChangeEvent, FC, useState, useMemo, FormEvent } from 'react';
import { IUser } from './IUser';
import { initialUser } from './initialUser';
import {USERS} from './usersData';
import Search from '../Search/Search';
import UserForm from '../UserForm/UserForm';
import User from '../User/User';

const UsersList:FC = () => {
    const [users, setUsers] = useState<IUser[]>(USERS);
    const [search, setSearch] = useState('');
    const [showUserForm, setShowUserForm] = useState(false);
    const [user, setUser] = useState(initialUser);

    const deleteUser = (id:number) => {
        const confirmDelete = window.confirm("Do you really want to delete this user?");
        if (confirmDelete) {
            setUsers(users.filter(user => id !== user.id));
        }
    };
    
    const searchedUsers = useMemo (() => {
        if (search) {
            return users.filter(user => user.firstName.toLowerCase().includes(search.toLowerCase()));
        }
        return users;
    }, [search, users]);

    const onChangeUserData = (event:ChangeEvent<HTMLInputElement>) => {
        const field = event.target.id;
        setUser({...user, [field]:event.target.value})
    };

    const addUser = (event: FormEvent) => {
        event.preventDefault();
        setUsers([...users, user]);
        initialUser.id = initialUser.id + 1;{/*чтобы при добавлении следующего не было ошибки*/}
        setUser(initialUser);
    }
    
    return (
        <>
        <Search setSearch={setSearch}/>
        <button className="btn btn-success my-3"
        onClick={() => setShowUserForm(!showUserForm)}>Add new user</button>
        {showUserForm && 
        <UserForm user={user} addUser={addUser} onChangeUserData={onChangeUserData}/>
        }
        <div className="row row-cols-1 row-cols-md-5 g-4">
            {searchedUsers.length 
            ?
            searchedUsers.map(user =>
                <User user={user} deleteUser={deleteUser} key={user.id}/>
            )
            :
            <h2 className="text-center">Users don't exist</h2>
            }
        </div>
        </>
    );
};

export default UsersList;
