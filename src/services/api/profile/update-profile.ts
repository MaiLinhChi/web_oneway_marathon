import ApiService from '@/services/api';

// TYPES

export type TUpdateProfileParams = unknown;
export type TUpdateProfileBody = {
  avatar?: string;
  email?: string;
  name?: string;
  phone?: string;
  gender?: boolean;
  dob?: string;
  bcoin?: number;
};

export type TUpdateProfileMaterials = {
  params?: TUpdateProfileParams;
  body?: TUpdateProfileBody;
};

export type TUpdateProfileResponse = unknown;

// FUNCTION

export const updateProfile = async ({ params, body }: TUpdateProfileMaterials): Promise<TUpdateProfileResponse> => {
  const response = await ApiService.post(`/profile`, body, { params });
  return response.data;
};
