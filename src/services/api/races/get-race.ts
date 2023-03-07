import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetRaceParams = unknown;

export type TGetRaceMaterials = {
  params?: TGetRaceParams;
};
export type TRaceData = [
  race: {
    slug?: string;
    image: null;
    name: string;
    start: string;
    end?: string;
  },
];
export type TGetRaceResponse = TCommonResponse & {
  data: Array<TRaceData>;
};

// FUNCTION

export const getRace = async ({ params }: TGetRaceMaterials): Promise<TGetRaceResponse> => {
  const response = await ApiService.post(`/api/races`, { params });
  return response.data;
};
