import ApiService from '@/services/api';

// TYPES

export type TRunnerRegisterGroupParams = string;
export type TRunnerRegisterGroupBody = {
  email?: string;
  phone?: string;
  fullName?: string;
  bibId: string;
};

export type TRunnerRegisterGroupMaterials = {
  id?: TRunnerRegisterGroupParams;
  body?: TRunnerRegisterGroupBody;
};

export type TRunnerRegisterGroupResponse = any;

// FUNCTION

export const runnerRegisterGroup = async ({
  id,
  body,
}: TRunnerRegisterGroupMaterials): Promise<TRunnerRegisterGroupResponse> => {
  const response = await ApiService.put(`group/join/${id}`, body);
  return response;
};
