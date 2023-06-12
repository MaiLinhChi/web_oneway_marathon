import ApiService from '@/services/api';

// TYPES

export type TRunnerRegisterGroupParams = string;
export type TRunnerRegisterGroupBody = {
  _id?: string;
  birthday: any;
  email?: string;
  phone?: string;
  fullName?: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  gender: string;
  groupId: string;
  marathon: {
    distance: number;
    marathonId: string;
    price: number;
    state: string;
    unit: string;
  };
  nameBib?: any;
  nationality: string;
  passport: string;
  shirtSize: string;
  timeEstimation: string;
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
  return response.data;
};
