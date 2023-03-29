export enum FormModalLoginValues {
  EMAIL = 'email',
  USERNAME = 'username',
  PASSWORD = 'password',
}

export interface FormModalLoginData {
  [FormModalLoginValues.EMAIL]: string;
  [FormModalLoginValues.USERNAME]: string;
  [FormModalLoginValues.PASSWORD]: string;
}
