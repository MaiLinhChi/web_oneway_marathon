import ApiService from '@/services/api';

// TYPES
export type TGetTicketDetailPaths = {
  id: string | number;
};

export type TGetTicketDetailParams = unknown;

export type TGetTicketDetailMaterials = {
  paths?: TGetTicketDetailPaths;
};

export type TGetTicketDetailResponse = any;

// FUNCTION

export const getTicketDetail = async ({ paths }: any): Promise<TGetTicketDetailResponse> => {
  const response = await ApiService.get(`/bib/${paths?.id}`);
  return response.data;
};
