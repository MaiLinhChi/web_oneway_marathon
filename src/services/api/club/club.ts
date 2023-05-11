import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetClubsParams = unknown;

export type TGetClubsMaterials = {
  params?: TGetClubsParams;
};
export type TGetClubsResponse = TCommonResponse & any;
// FUNCTION

export const getClubs = async ({ params }: TGetClubsMaterials): Promise<TGetClubsResponse> => {
  const response = await ApiService.get(`/club`, { params });
  return response.data;
};
