import ApiService from '@/services/api';

// TYPES

export type TChangePasswordProfileParams = unknown;
export type TChangePasswordProfileBody = {
  password: string;
  newPassword: string;
};

export type TChangePasswordProfileMaterials = {
  params?: TChangePasswordProfileParams;
  body?: TChangePasswordProfileBody;
};

export type TChangePasswordProfileResponse = unknown;

// FUNCTION

export const changePasswordProfile = async ({
  params,
  body,
}: TChangePasswordProfileMaterials): Promise<TChangePasswordProfileResponse> => {
  const response = await ApiService.post(`/auth/change-password`, body, { params });
  return response.data;
};
