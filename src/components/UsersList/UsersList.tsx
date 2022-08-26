import React, {
  ChangeEvent,
  FC,
  useState,
  FormEvent,
  useEffect,
} from 'react';
import { IUser } from './IUser';
import { initialUser } from './initialUser';
import Search from '../Search/Search';
import UserForm from '../UserForm/UserForm';
import User from '../User/User';
import Loader from '../Loader/Loader';
import http from '../../http';
import { useSearch } from '../../hooks/useSearch';

const UsersList: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [search, setSearch] = useState('');
  const [showUserForm, setShowUserForm] = useState(false);
  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const fetchedUsers = await http.get('users');
      setUsers(fetchedUsers.data.data);
    } catch (e) {
      console.log(e);
    }
  };

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

  const searchedUsers = useSearch(users, search, 'first_name');

  const onChangeUserData = (event: ChangeEvent<HTMLInputElement>) => {
    const field = event.target.id;
    setUser({ ...user, [field]: event.target.value });
  };

  const addUser = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const addedUser = await http.post('users/', user);
      if (addedUser.data) {
        setUsers([...users, user]);
        initialUser.id = initialUser.id + 1; //чтобы при добавлении следующего не было ошибки
        setUser(initialUser);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Search setSearch={setSearch} />
      <button
        className="btn btn-success my-3"
        onClick={() => setShowUserForm(!showUserForm)}
      >
        Add new user
      </button>
      {showUserForm && (
        <UserForm
          user={user}
          addUser={addUser}
          onChangeUserData={onChangeUserData}
        />
      )}
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {searchedUsers.length ? (
          searchedUsers.map((user) => (
            <User user={user} deleteUser={deleteUser} key={user.id} />
          ))
        ) : (
          <Loader color="text-secondary" />
        )}
      </div>
    </>
  );
};

export default UsersList;
