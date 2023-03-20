import ApiService from '@/services/api';

// TYPES

export type TAuthSignUpParams = unknown;
export type TAuthSignUpBody = unknown;

export type TAuthSignUpMaterials = {
  params?: TAuthSignUpParams;
  body?: TAuthSignUpBody;
};

export type TAuthSignUpResponse = unknown;

// FUNCTION

export const authSignUp = async ({ params, body }: TAuthSignUpMaterials): Promise<TAuthSignUpResponse> => {
  const response = await ApiService.post(`/users`, body, { params });
  return response;
};
