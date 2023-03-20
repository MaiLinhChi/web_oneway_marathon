import ApiService from '@/services/api';

// TYPES

export type TRunnerRegisterGroupParams = unknown;
export type TRunnerRegisterGroupBody = {
  group_slug?: string;
  group_password?: string;
};

export type TRunnerRegisterGroupMaterials = {
  params?: TRunnerRegisterGroupParams;
  body?: TRunnerRegisterGroupBody;
};

export type TRunnerRegisterGroupResponse = any;

// FUNCTION

export const runnerRegisterGroup = async ({
  params,
  body,
}: TRunnerRegisterGroupMaterials): Promise<TRunnerRegisterGroupResponse> => {
  const response = await ApiService.post(`api/group/runner-register-participate`, body, { params });
  return response.data;
};
