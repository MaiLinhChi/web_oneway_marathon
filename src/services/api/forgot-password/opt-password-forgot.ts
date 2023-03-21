import ApiService from '@/services/api';

// TYPES

export type TGetOtpForgotHeaders = {
  email: string;
};

export type TGetOtpForgotMaterials = {
  params?: TGetOtpForgotHeaders;
};

export type TGetOtpForgotResponse = any;

// FUNCTION

export const getOtpPasswordForgot = async ({ params }: TGetOtpForgotMaterials): Promise<TGetOtpForgotResponse> => {
  const response = await ApiService.post(`/users/password/forgot`, params);
  return response;
};
