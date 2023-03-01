import RegistersService from '@/services/registers';

// TYPES

export type TRegisterTicketParams = unknown;
export type TRegisterTicketBody = unknown;

export type TRegisterTicketMaterials = {
  params?: TRegisterTicketParams;
  body?: TRegisterTicketBody;
};

export type TRegisterTicketResponse = unknown;

// FUNCTION

export const registerTicket = async ({ params, body }: TRegisterTicketMaterials): Promise<TRegisterTicketResponse> => {
  const response = await RegistersService.post(`api/orders/create-ticket-order`, body, { params });
  return response.data;
};
