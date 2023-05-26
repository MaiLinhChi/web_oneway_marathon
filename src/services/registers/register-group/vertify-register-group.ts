import ApiService from '@/services/api';

// TYPES

// export type TVertifyRegisterGroupParams = {
//   authorization: string;
// };
export type TVertifyRegisterGroupBody = {
  _id: string;
  password: string;
};

export type TVertifyRegisterGroupMaterials = {
  // headers: TVertifyRegisterGroupParams;
  body: TVertifyRegisterGroupBody;
};

export type TVertifyRegisterGroupResponse = any;

// FUNCTION

export const vertifyRegisterGroup = async ({
  body,
}: TVertifyRegisterGroupMaterials): Promise<TVertifyRegisterGroupResponse> => {
  const response = await ApiService.post(`group/authenticate`, body);
  return response.data;
};
