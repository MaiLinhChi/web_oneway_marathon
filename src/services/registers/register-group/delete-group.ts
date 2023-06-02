import ApiService from '@/services/api';

// TYPES

export type TDeleteGroupParams = string;
export type TDeleteGroupHeaders = {
  authorization?: string;
};

export type TDeleteGroupMaterials = {
  id?: TDeleteGroupParams;
  headers?: TDeleteGroupHeaders;
};

export type TDeleteGroupResponse = any;

// FUNCTION

export const deleteGroup = async ({ id, headers }: TDeleteGroupMaterials): Promise<TDeleteGroupResponse> => {
  const response = await ApiService.delete(`group/${id}`, { headers });
  return response;
};
