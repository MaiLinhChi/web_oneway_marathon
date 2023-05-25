import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES
export type TDetailRaceParams = unknown;

export type TDetailRaceMaterials = {
  id?: string;
  params?: TDetailRaceParams;
};

export type TDetailRaceResponse = TCommonResponse & any;

export const detailRace = async ({ id, params }: any): Promise<TDetailRaceResponse> => {
  const response = await ApiService.get(`/marathon/${id}`, { params });
  return response.data;
};
