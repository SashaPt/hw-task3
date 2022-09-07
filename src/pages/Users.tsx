import React, { FC, useState, useEffect } from 'react';
import Search from '../components/Search/Search';
import UserForm from '../components/UserForm/UserForm';
import UsersCards from '../components/UsersCards/UsersCards';
import ShowFormButton from '../components/ShowFormButton/ShowFormButton';
import { useAction } from '../hooks/useAction';

const Users: FC = () => {
  const [search, setSearch] = useState('');
  const [showUserForm, setShowUserForm] = useState(false);
  const { getUsers } = useAction();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Search setSearch={setSearch} />
      <ShowFormButton
        showUserForm={showUserForm}
        setShowUserForm={setShowUserForm}
      />
      {showUserForm && <UserForm />}
      <UsersCards search={search} />
    </>
  );
};

export default Users;
