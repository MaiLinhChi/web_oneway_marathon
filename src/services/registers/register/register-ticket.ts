import RegistersService from '@/services/registers';

// TYPES

export type TRegisterTicketParams = unknown;
export type TRegisterTicketBody = unknown;

export type TRegisterTicketMaterials = {
  body?: TRegisterTicketBody;
};

export type TRegisterTicketResponse = unknown;

// FUNCTION

export const registerTicket = async ({ body }: TRegisterTicketMaterials): Promise<TRegisterTicketResponse> => {
  const response = await RegistersService.post(`bib`, body);
  return response.data;
};
