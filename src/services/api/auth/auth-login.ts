import ApiService from '@/services/api';
import { TCommonResponse } from '@/common/types';

// TYPES

export type TAuthLoginParams = { id: string };
export type TAuthLoginBody = unknown;

export type TAuthLoginMaterials = {
  params?: TAuthLoginParams;
  body?: TAuthLoginBody;
};

// export type TAuthLoginResponse = TCommonResponse & {
//   status?: number;
//   data: {
//     token?: string;
//   };
// };

export type TAuthLoginResponse = TCommonResponse & any;

// FUNCTION

export const authLogin = async ({ params, body }: TAuthLoginMaterials): Promise<TAuthLoginResponse> => {
  const response = await ApiService.post(`/authenticate`, body, { params });
  return response;
};
