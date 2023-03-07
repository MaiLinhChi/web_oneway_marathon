import ApiService from '@/services/api';

// TYPES

export type TChangePasswordProfileParams = unknown;
export type TChangePasswordProfileBody = {
  password: string;
  new_password: string;
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
  const response = await ApiService.put(`/api/users/update-pass`, body, { params });
  return response.data;
};
