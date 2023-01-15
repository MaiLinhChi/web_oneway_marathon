import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetProfileParams = unknown;

export type TGetProfileMaterials = {
  params?: TGetProfileParams;
};

export type TGetProfileResponse = TCommonResponse & {
  data: {
    user: {
      avatar?: string;
      birthday: null;
      email: string;
      gender: null;
      name: string;
      phone: null;
      id_card: null;
      address?: string;
      fullAddress?: string;
      ward?: string;
      district: string;
      city?: string;
      country?: string;
    };
  };
};

// FUNCTION

export const getProfile = async ({ params }: TGetProfileMaterials): Promise<TGetProfileResponse> => {
  const response = await ApiService.post(`/api/users/profile`, { params });
  return response.data;
};
