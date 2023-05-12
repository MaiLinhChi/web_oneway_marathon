import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES
export type TGetRacePaths = {
  id: string | number;
};

export type TDetailRaceParams = any;

export type TDetailRaceMaterials = {
  paths?: TGetRacePaths;
  params?: TDetailRaceParams;
};
export type TTicketRaces = {
  id?: number;
  name?: string;
};
export type TDetailRaceResponse = TCommonResponse & any;
// export type TDetailRaceResponse = TCommonResponse & {
//   data: {
//     race: {
//       slug?: string;
//       image: null;
//       name: string;
//       start: string;
//       end?: string;
//       tickets?: any;
//       ward?: string;
//       award?: Array<TDetailAward>;
//       description?: string;
//     };
//   };
// };
// export type TDetailAward = {
//   name?: string;
//   first?: string;
//   fourth?: string;
//   second?: string;
//   third?: string;
// };

// FUNCTION

export const detailRace = async ({ paths, params }: any): Promise<TDetailRaceResponse> => {
  const response = await ApiService.get(`/marathon/${paths}`, { params });
  return response.data;
};
