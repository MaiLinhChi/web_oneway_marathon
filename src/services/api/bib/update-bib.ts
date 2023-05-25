import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TUpdateBibParams = {
  // params: {
  //   authorization: string;
  // };
  id: string;
};

export type TUpdateBibMaterials = {
  headers?: TUpdateBibParams;
  body?: any;
};

export type TUpdateBibResponse = any;
// FUNCTION

export const UpdateBib = async ({ headers, body }: TUpdateBibMaterials): Promise<TUpdateBibResponse> => {
  const response = await ApiService.put(`bib/${headers?.id}`, body);
  console.log(response);
  return response.data;
};
