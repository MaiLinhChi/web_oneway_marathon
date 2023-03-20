import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetProfileHeaders = {
  authorization: string;
};

export type TGetProfileMaterials = {
  params?: TGetProfileHeaders;
};

// export type TGetProfileResponse = TCommonResponse & {
//   data: {
//     user: {
//       avatar?: string;
//       birthday: null;
//       email: string;
//       gender: null;
//       name: string;
//       phone: null;
//       id_card: null;
//       address?: string;
//       fullAddress?: string;
//       ward?: string;
//       district: string;
//       city?: string;
//       country?: string;
//     };
//   };
// };

export type TGetProfileResponse = TCommonResponse & any;

// FUNCTION

export const getProfile = async (params: TGetProfileMaterials): Promise<TGetProfileResponse> => {
  const response = await ApiService.get(`/me`, params);
  return response;
};
