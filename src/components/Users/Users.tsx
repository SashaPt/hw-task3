import React, {
  FC,
  useState,
  useEffect,
} from 'react';
import { IUser } from './IUser';
import Search from '../Search/Search';
import UserForm from '../UserForm/UserForm';
import http from '../../http';
import { useSearch } from '../../hooks/useSearch';
import UserCards from '../UsersCards/UserCards';
import ShowFormButton from '../ShowFormButton/ShowFormButton';

const Users: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [search, setSearch] = useState('');
  const [showUserForm, setShowUserForm] = useState(false);

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

  const searchedUsers = useSearch(users, search, 'first_name');

  return (
    <>
      <Search setSearch={setSearch} />
      <ShowFormButton showUserForm={showUserForm} setShowUserForm={setShowUserForm}/>
      {showUserForm && (
        <UserForm
          users={users}
          setUsers={setUsers}
        />
      )}
      <UserCards users={searchedUsers} setUsers={setUsers}/>
    </>
  );
};

export default Users;
