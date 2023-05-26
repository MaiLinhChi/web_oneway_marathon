import ApiService from '@/services/api';

// TYPES

export type TUpdateTicketParams = {
  // params: {
  //   authorization: string;
  // };
  id: string;
};

export type TUpdateTicketMaterials = {
  headers?: TUpdateTicketParams;
  body?: any;
};

export type TUpdateTicketResponse = any;
// FUNCTION

export const updateTicket = async ({ headers, body }: TUpdateTicketMaterials): Promise<TUpdateTicketResponse> => {
  const response = await ApiService.put(`bib/${headers?.id}`, body);
  return response.data;
};
