import RegistersService from '@/services/registers';

// TYPES

export type TRegisterGroupParams = {
  authorization: string;
};
export type TRegisterGroupBody = {
  // race_slug?: string;
  marathonId: string;
  groupName?: string;
  password?: string;
  fullName?: string;
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
  const response = await RegistersService.post(`group`, body, { params });
  return response.data;
};
