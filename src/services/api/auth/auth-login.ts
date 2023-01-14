import ApiService from '@/services/api';

// TYPES

export type TAuthLoginParams = unknown;
export type TAuthLoginBody = unknown;

export type TAuthLoginMaterials = {
  params?: TAuthLoginParams;
  body?: TAuthLoginBody;
};

export type TAuthLoginResponse = unknown;

// FUNCTION

export const authLogin = async ({ params, body }: TAuthLoginMaterials): Promise<TAuthLoginResponse> => {
  const response = await ApiService.post(`/api/login`, body, { params });
  return response.data;
};
