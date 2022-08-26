export interface IUser {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface IPost {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
}