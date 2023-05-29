import { TCommonResponse } from '@/common/types';
import RegistersService from '@/services/registers';

// TYPES
export type TGetTicketsParams = {
  email: string;
  marathon: string;
  groupId: string;
  pageSize: number;
  pageIndex: number;
};

export type TGetTicketsMaterials = {
  params: TGetTicketsParams;
};

export type TGetTicketsResponse = any | TCommonResponse;

export const getTickets = async (params: TGetTicketsMaterials): Promise<TGetTicketsResponse> => {
  const response = await RegistersService.get(`bibs`, params);
  return response.data;
};
