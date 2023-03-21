import ApiService from '@/services/api';

// TYPES

export type TChangePasswordForgotBody = {
  email: string;
  code: string;
  password: string;
};

export type TChangePasswordForgotMaterials = {
  body?: TChangePasswordForgotBody;
};

export type TChangePasswordForgotResponse = any;

// FUNCTION

export const changePasswordForgot = async ({
  body,
}: TChangePasswordForgotMaterials): Promise<TChangePasswordForgotResponse> => {
  const response = await ApiService.put(`/users/password/forgot`, body);
  return response;
};
