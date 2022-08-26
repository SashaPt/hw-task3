import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from 'react';
import http from '../../http';
import { initialUser } from '../Users/initialUser';
import { IUser } from '../Users/IUser';

const UserForm = ({
  users,
  setUsers,
}: {
  users: IUser[];
  setUsers: Dispatch<SetStateAction<IUser[]>>;
}) => {
  const [user, setUser] = useState(initialUser);
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
        initialUser.id = initialUser.id + 1;
        setUser(initialUser);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form
      className="mb-3 bg-light p-3 w-50 mx-auto"
      onSubmit={(event) => addUser(event)}
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
