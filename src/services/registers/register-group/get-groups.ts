import RegistersService from '@/services/registers';

// TYPES

export type TGetGroupsParams = {
  marathonId: string;
  email: string;
};

export type TGetGroupsMaterials = {
  params?: TGetGroupsParams;
};

export type TGetGroupsResponse = any;

// FUNCTION

export const getGroups = async ({ params }: TGetGroupsMaterials): Promise<TGetGroupsResponse> => {
  const response = await RegistersService.get(`groups`, { params });
  return response.data;
};
