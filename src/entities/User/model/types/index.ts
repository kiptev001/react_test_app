export interface IUser {
  username: string;
  password: string;
}

export interface UserSchema {
  authData: IUser;
}
