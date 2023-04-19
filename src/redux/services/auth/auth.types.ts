import { ApiPlant, ApiPlantType } from '@/redux/services/plants/plants.type';

export interface ApiUser {
  _id: string;
  email: string;
  username: string;
  password: string;
  garden: ApiUserGarden[];
}

export interface ApiUserGarden {
  plant?: ApiPlant | null;
}

export type ApiUsersMeGetResponse = Omit<ApiUser, 'password'>;

// === REGISTER
export type ApiAuthRegisterUserBody = Omit<ApiUser, 'username' | '_id' | 'garden'>;
export type ApiAuthRegisterUserResponse = {
  token: string;
};

// === LOGIN
export type ApiAuthLoginUserBody = Omit<ApiUser, '_id' | 'garden'>;
export type ApiAuthLoginUserResponse = {
  token: string;
};

// === GARDEN
export interface ApiUserUpdateGardenPatchBody {
  plantIndex: number;
  plantId: string;
  plantType: ApiPlantType;
}

export type ApiUserDeleteGardenPatchBody = Pick<ApiUserUpdateGardenPatchBody, 'plantIndex'>;
