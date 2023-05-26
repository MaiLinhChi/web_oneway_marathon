import ApiService from '@/services/api';

// TYPES

export type TUpdateTicketMaterials = {
  id: string;
  body: any;
};

export type TUpdateTicketResponse = any;
// FUNCTION

export const updateTicket = async ({ id, body }: TUpdateTicketMaterials): Promise<TUpdateTicketResponse> => {
  const response = await ApiService.put(`bib/${id}`, body);
  return response.data;
};
