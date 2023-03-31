import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetMarathonHeaders = {
  params: {
    limit: number;
  };
};

export type TGetMarathonMaterials = {
  requests?: TGetMarathonHeaders;
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

export type TGetMarathonResponse = TCommonResponse & any;

// FUNCTION

export const getMarathons = async (params: TGetMarathonMaterials): Promise<TGetMarathonResponse> => {
  const response = await ApiService.get(`/marathons`, params.requests);
  return response.data;
};
