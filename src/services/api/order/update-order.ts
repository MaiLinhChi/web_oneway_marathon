import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TUpdateOrderHeaders = {
  params: {
    limit: number;
  };
};

export type TUpdateOrderMaterials = {
  requests?: TUpdateOrderHeaders;
};

// export type TUpdateProfileResponse = TCommonResponse & {
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

export type TUpdateOrderResponse = TCommonResponse & any;

// FUNCTION

export const updateOrder = async (params: TUpdateOrderMaterials): Promise<TUpdateOrderResponse> => {
  const response = await ApiService.put(`/order`, params.requests);
  return response.data;
};
