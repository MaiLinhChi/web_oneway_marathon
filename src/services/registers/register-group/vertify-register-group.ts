import ApiService from '@/services/api';

// TYPES

export type TVertifyRegisterGroupParams = unknown;
export type TVertifyRegisterGroupBody = {
  group_slug?: string;
  group_password?: string;
};

export type TVertifyRegisterGroupMaterials = {
  params?: TVertifyRegisterGroupParams;
  body?: TVertifyRegisterGroupBody;
};

export type TVertifyRegisterGroupResponse = any;

// FUNCTION

export const vertifyRegisterGroup = async ({
  params,
  body,
}: TVertifyRegisterGroupMaterials): Promise<TVertifyRegisterGroupResponse> => {
  const response = await ApiService.post(`api/group/register-participate-verify`, body, { params });
  return response.data;
};
