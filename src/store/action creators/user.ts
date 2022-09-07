import { Dispatch } from 'redux';
import { IUser } from '../../components/Users/IUser';
import http from '../../http';
import { UserAction, UserActionType } from '../types/user';

export const getUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    const response = await http.get('users');
    dispatch({ type: UserActionType.GET_USERS, payload: response.data.data });
  };
};

export const deleteUser = (userId: number) => {
  return async (dispatch: Dispatch<UserAction>) => {
    const isDelete = window.confirm('Do you really want to delete this user?');
    if (isDelete) {
      const response = await http.delete(`users/${userId}`);
      if (response.status >= 200 && response.status < 300) {
        dispatch({ type: UserActionType.DELETE_USER, payload: userId });
      }
    }
  };
};

export const addUser = (user: IUser) => {
  return async (dispatch: Dispatch<UserAction>) => {
    const response = await http.post('users/', user);
    if (response.data) {
      dispatch({ type: UserActionType.ADD_USER, payload: user });
    }
  };
};
