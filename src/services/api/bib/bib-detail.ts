import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES
export type TGetBibDetailPaths = {
  id: string | number;
};

export type TGetBibDetailParams = unknown;

export type TGetBibDetailMaterials = {
  paths?: TGetBibDetailPaths;
};

export type TGetBibDetailResponse = any;

// FUNCTION

export const getBibDetail = async ({ paths }: any): Promise<TGetBibDetailResponse> => {
  const response = await ApiService.get(`/bib/${paths?.id}`);
  return response.data;
};
