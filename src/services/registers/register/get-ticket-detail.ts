import ApiService from '@/services/api';

// TYPES

export type TGetTicketDetailParams = unknown;

export type TGetTicketDetailMaterials = {
  id: string;
};

export type TGetTicketDetailResponse = any;

// FUNCTION

export const getTicketDetail = async ({ id }: any): Promise<TGetTicketDetailResponse> => {
  const response = await ApiService.get(`/bib/${id}`);
  return response.data;
};
