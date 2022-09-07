import { UserAction, UserActionType, UserState } from '../types/user';

const initialState: UserState = {
  users: [],
  status: 0,
  userId: 0,
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionType.GET_USERS:
      return { users: action.payload };
    case UserActionType.DELETE_USER:
      return {
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case UserActionType.ADD_USER:
      return { users: [...state.users, action.payload] };
    default:
      return state;
  }
};
