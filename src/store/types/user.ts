import { IUser } from "../../components/Users/IUser";

export interface UserState {
    users: IUser[],
    status?: number,
    userId?: number
}

export enum UserActionType {
    GET_USERS = 'GET_USERS',
    DELETE_USER = 'DELETE_USER',
    ADD_USER = 'ADD_USER'
}

interface GetUserAction {
    type: UserActionType.GET_USERS,
    payload: IUser[]
}

interface DeleteUserAction {
    type: UserActionType.DELETE_USER,
    payload: number
}

interface AddUserAction {
    type: UserActionType.ADD_USER,
    payload: IUser
}

export type UserAction = GetUserAction | DeleteUserAction | AddUserAction;