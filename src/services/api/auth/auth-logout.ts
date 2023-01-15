import ApiService from '@/services/api';

// TYPES

export type TAuthLogoutParams = unknown;
export type TAuthLogoutBody = unknown;

export type TAuthLogoutMaterials = {
  params?: TAuthLogoutParams;
  body?: TAuthLogoutBody;
};

export type TAuthLogoutResponse = unknown;

// FUNCTION

export const authLogout = async ({ params, body }: TAuthLogoutMaterials): Promise<TAuthLogoutResponse> => {
  const response = await ApiService.post(`/api/logout`, body, { params });
  return response.data;
};
