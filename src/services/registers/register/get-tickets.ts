import { TCommonResponse } from '@/common/types';
import RegistersService from '@/services/registers';

// TYPES
export type TGetTicketsParams = {
  email: string;
  marathon: string;
};

export type TGetTicketsHeaders = {
  authorization: string;
};

export type TGetTicketsMaterials = {
  headers?: TGetTicketsHeaders;
  params: TGetTicketsParams;
};

export type TGetTicketsResponse = any | TCommonResponse;

export const getTickets = async (materials: TGetTicketsMaterials): Promise<TGetTicketsResponse> => {
  const response = await RegistersService.get(`bibs`, materials);
  return response.data;
};
