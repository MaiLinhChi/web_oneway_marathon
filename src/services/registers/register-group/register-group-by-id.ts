import RegistersService from '@/services/registers';

// TYPES

export type TRegisterGroupParams = {
  params: {
    authorization: string;
  };
  id: string;
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
  headers?: TRegisterGroupParams;
  body?: TRegisterGroupBody;
};

export type TRegisterGroupResponse = any;

// FUNCTION

export const getGroupById = async ({ headers }: TRegisterGroupMaterials): Promise<TRegisterGroupResponse> => {
  const response = await RegistersService.get(`group/${headers?.id}`, { headers: headers?.params });
  return response.data;
};
