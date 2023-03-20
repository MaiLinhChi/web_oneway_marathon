import ApiService from '@/services/api';

// TYPES

export type TChangePasswordProfileParams = {
  params: {
    authorization: string;
  };
};
export type TChangePasswordProfileBody = {
  password: string;
  new_password: string;
};

export type TChangePasswordProfileMaterials = {
  params?: TChangePasswordProfileParams;
  body?: TChangePasswordProfileBody;
};

export type TChangePasswordProfileResponse = any;

// FUNCTION

export const changePasswordProfile = async ({
  params,
  body,
}: TChangePasswordProfileMaterials): Promise<TChangePasswordProfileResponse> => {
  const response = await ApiService.put(`/password`, body, { params });
  return response;
};
