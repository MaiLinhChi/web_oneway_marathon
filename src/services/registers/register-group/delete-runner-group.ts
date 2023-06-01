import ApiService from '@/services/api';

// TYPES

export type TDeleteRunnerGroupParams = string;
export type TDeleteRunnerGroupBody = {
  email?: string;
};
export type TDeleteRunnerGroupHeaders = {
  authorization?: string;
};

export type TDeleteRunnerGroupMaterials = {
  id?: TDeleteRunnerGroupParams;
  body?: TDeleteRunnerGroupBody;
  headers?: TDeleteRunnerGroupHeaders;
};

export type TDeleteRunnerGroupResponse = any;

// FUNCTION

export const deleteRunnerGroup = async ({
  id,
  body,
  headers,
}: TDeleteRunnerGroupMaterials): Promise<TDeleteRunnerGroupResponse> => {
  const response = await ApiService.put(`group/remove/${id}`, body, { headers });
  return response;
};
