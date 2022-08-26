import React, {
  FC,
  useState,
  useEffect,
} from 'react';
import { IUser } from '../components/Users/IUser';
import Search from '../components/Search/Search';
import UserForm from '../components/UserForm/UserForm';
import http from '../http';
import { useSearch } from '../hooks/useSearch';
import UserCards from '../components/UsersCards/UsersCards';
import ShowFormButton from '../components/ShowFormButton/ShowFormButton';

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
