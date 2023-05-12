import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetRaceParams = {
  status: string;
};

export type TGetRaceMaterials = {
  params?: TGetRaceParams;
};
// export type TRaceData = [
//   race: {
//     slug?: string;
//     image: null;
//     name: string;
//     start: string;
//     end?: string;
//   },
// ];
// export type TGetRaceResponse = TCommonResponse & {
//   data: Array<TRaceData>;
// };
export type TGetRaceResponse = TCommonResponse & any;

// FUNCTION

export const getRace = async ({ params }: TGetRaceMaterials): Promise<TGetRaceResponse> => {
  const response = await ApiService.get(`/marathons`, { params });
  return response.data;
};
