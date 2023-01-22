export enum FormModalLoginValues {
  EMAIL = 'email',
  PASSWORD = 'password',
}

export interface FormModalLoginData {
  [FormModalLoginValues.EMAIL]: string;
  [FormModalLoginValues.PASSWORD]: string;
}
