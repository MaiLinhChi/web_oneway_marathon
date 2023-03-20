import { createActionCreator } from 'deox';

import { TAddressMaterials, TAddressResponse } from '@/services/api/address/address';

// CONSTANTS

export enum EAddressAction {
  ADDRESS = 'ADDRESS',
  ADDRESS_REQUEST = 'ADDRESS_REQUEST',
  ADDRESS_SUCCESS = 'ADDRESS_SUCCESS',
  ADDRESS_FAILED = 'ADDRESS_FAILED',
}

// TYPES

export type TAddressRequest = {
  type: EAddressAction.ADDRESS_REQUEST;
  payload: {
    materials: TAddressMaterials;
    successCallback?: (response: TAddressResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TAddressSuccess = {
  type: EAddressAction.ADDRESS_SUCCESS;
  payload: { response: TAddressResponse };
};

export type TAddressFailed = { type: EAddressAction.ADDRESS_FAILED };

// FUNCTION

export const addressAction = {
  request: createActionCreator(
    EAddressAction.ADDRESS_REQUEST,
    (resolve) =>
      (
        materials: TAddressMaterials,
        successCallback?: (response: TAddressResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TAddressRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EAddressAction.ADDRESS_SUCCESS,
    (resolve) =>
      (response: TAddressResponse): TAddressSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAddressAction.ADDRESS_FAILED,
    (resolve) =>
      (error: unknown): TAddressFailed =>
        resolve({ error }),
  ),
};
