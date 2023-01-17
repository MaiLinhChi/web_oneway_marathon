import RegistersService from '@/services/registers';

// TYPES

export type TGetTicketsParams = unknown;
export type TGetTicketsBody = {
  slug?: string;
};

export type TGetTicketsMaterials = {
  params?: TGetTicketsParams;
  body?: TGetTicketsBody;
};
export type TGetTicketsResponse = {
  data: any;
};
// export type TGetTicketsResponse = {
//   data: {
//     tickets: {
//       id?: number;
//       name?: string;
//       distance?: string;
//       transfer_fee?: number;
//       discount?: number;
//       discount_type?: string;
//       image?: string;
//       road_map_image?: string;
//       prices: [];
//     };
//   };
// };

// FUNCTION

export const getTickets = async ({ body, params }: TGetTicketsMaterials): Promise<TGetTicketsResponse> => {
  const response = await RegistersService.post(`api/races`, body, { params });
  console.log('response', response);
  return response.data;
};
