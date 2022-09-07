import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useAction } from '../../hooks/useAction';
import { initialUser } from '../Users/initialUser';
import { IUser } from '../Users/IUser';

const UserForm = () => {
  const { addUser } = useAction();
  const [user, setUser] = useState(initialUser);
  const onChangeUserData = (event: ChangeEvent<HTMLInputElement>) => {
    const field = event.target.id;
    setUser({ ...user, [field]: event.target.value });
  };

  const addUserCard = async (event: FormEvent) => {
    event.preventDefault();
    await addUser(user);
    initialUser.id = initialUser.id + 1;
    setUser(initialUser);
  };
  return (
    <form
      className="mb-3 bg-light p-3 w-50 mx-auto"
      onSubmit={(event) => addUserCard(event)}
    >
      {Object.keys(user).map((field) => {
        if (field === 'id') return undefined;
        return (
          <div className="mb-3" key={field}>
            <input
              type="text"
              className="form-control"
              id={field}
              required
              placeholder={field}
              value={user[field as keyof Omit<IUser, 'id'>]}
              onChange={(event) => onChangeUserData(event)}
            />
          </div>
        );
      })}
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default UserForm;
