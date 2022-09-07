import { combineReducers } from 'redux';
import { userReducer } from './userReduser';

export const rootReducer = combineReducers({
  users: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
