import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES
export type TGetRacePaths = {
  id: string | number;
};

export type TDetailRaceParams = unknown;

export type TDetailRaceMaterials = {
  paths?: TGetRacePaths;
  params?: TDetailRaceParams;
};
export type TTicketRaces = {
  id?: number;
  name?: string;
};
export type TDetailRaceResponse = TCommonResponse & {
  data: {
    race: {
      slug?: string;
      image: null;
      name: string;
      start: string;
      end?: string;
      tickets?: any;
      description?: string;
    };
  };
};

// FUNCTION

export const detailRace = async ({ paths, params }: any): Promise<TDetailRaceResponse> => {
  const response = await ApiService.post(`/api/races/${paths?.id}`, { params });
  return response.data;
};
