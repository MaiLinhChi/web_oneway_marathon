import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TOrderEditParams = {
  params: {
    authorization: string;
  };
  id: string;
};

export type TOrderEditMaterials = {
  headers?: TOrderEditParams;
  body?: any;
};

export type TOrderEditResponse = any;
// FUNCTION

export const OrderEdit = async ({ headers, body }: TOrderEditMaterials): Promise<TOrderEditResponse> => {
  const response = await ApiService.put(`bib/${headers?.id}`, body, { headers: headers?.params });
  console.log(response);
  return response.data;
};
