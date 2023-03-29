export interface ApiUser {
  _id: string;
  email: string;
  username: string;
  password: string;
}

export type ApiUsersMeGetResponse = Omit<ApiUser, 'password'>;

// === REGISTER
export type ApiAuthRegisterUserBody = Omit<ApiUser, 'username' | '_id'>;
export type ApiAuthRegisterUserResponse = {
  token: string;
};

// === LOGIN
export type ApiAuthLoginUserBody = Omit<ApiUser, '_id'>;
export type ApiAuthLoginUserResponse = {
  token: string;
};
