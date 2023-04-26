import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

export type TGetMarathonByIdMaterials = string;

export type TGetMarathonByIdResponse = TCommonResponse & any;

// FUNCTION

export const getMarathonById = async (id: TGetMarathonByIdMaterials): Promise<TGetMarathonByIdResponse> => {
  const response = await ApiService.get(`/marathon/${id}`);
  return response.data;
};
