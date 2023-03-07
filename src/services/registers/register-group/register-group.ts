import RegistersService from '@/services/registers';

// TYPES

export type TRegisterGroupParams = unknown;
export type TRegisterGroupBody = {
  race_slug?: string;
  group_name?: string;
  group_password?: string;
  full_name?: string;
  email?: string;
  phone?: string;
};

export type TRegisterGroupMaterials = {
  params?: TRegisterGroupParams;
  body?: TRegisterGroupBody;
};

export type TRegisterGroupResponse = any;

// FUNCTION

export const registerGroup = async ({ params, body }: TRegisterGroupMaterials): Promise<TRegisterGroupResponse> => {
  console.log('body-api', body);
  const response = await RegistersService.post(`api/group/create`, body, { params });
  return response.data;
};
