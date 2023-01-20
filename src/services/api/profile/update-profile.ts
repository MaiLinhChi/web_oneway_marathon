import ApiService from '@/services/api';

// TYPES

export type TUpdateProfileParams = unknown;
export type TUpdateProfileBody = {
  fullName?: string;
  avatar?: string;
  birthday?: string;
  email?: string;
  name?: string;
  phone?: string;
  gender?: boolean;
  address?: string;
  country?: string;
  city?: string;
  district?: string;
  ward?: string;
  idCard?: number;
};

export type TUpdateProfileMaterials = {
  params?: TUpdateProfileParams;
  body?: TUpdateProfileBody;
};

export type TUpdateProfileResponse = unknown;

// FUNCTION

export const updateProfile = async ({ params, body }: TUpdateProfileMaterials): Promise<TUpdateProfileResponse> => {
  const response = await ApiService.put(`/api/users/update-profile`, body, { params });
  return response.data;
};
