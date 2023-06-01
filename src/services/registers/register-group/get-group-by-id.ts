import RegistersService from '@/services/registers';

// TYPES

export type TGetGroupId = string;

export type TGetGroupByIdMaterials = {
  id?: TGetGroupId;
};

export type TGetGroupByIdResponse = any;

// FUNCTION

export const getGroupById = async ({ id }: TGetGroupByIdMaterials): Promise<TGetGroupByIdResponse> => {
  const response = await RegistersService.get(`group/${id}`);
  return response.data;
};
