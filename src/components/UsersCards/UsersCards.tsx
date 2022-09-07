import React from 'react';
import { useAction } from '../../hooks/useAction';
import { useSearch } from '../../hooks/useSearch';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Loader from '../Loader/Loader';
import UserCard from '../UserCard/UserCard';

const UsersCards = ({search} : {search: string}) => {
  const { users } = useTypedSelector((state) => state.users);
  const { deleteUser } = useAction();
  const searchedUsers = useSearch(users, search, 'first_name');
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {searchedUsers.length ? (
        searchedUsers.map((user) => (
          <UserCard user={user} deleteUser={deleteUser} key={user.id} />
        ))
      ) : (
        <Loader color="text-secondary" />
      )}
    </div>
  );
};

export default UsersCards;
