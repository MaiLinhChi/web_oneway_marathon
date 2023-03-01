import { createActionCreator } from 'deox';

import { TUpdatePromotionMaterials, TUpdatePromotionResponse } from '@/services/api/promotion';

// CONSTANTS

export enum EUpdatePromotionAction {
  PROMOTION_PROFILE = 'PROMOTION_PROFILE',
  PROMOTION_PROFILE_REQUEST = 'PROMOTION_PROFILE_REQUEST',
  PROMOTION_PROFILE_SUCCESS = 'PROMOTION_PROFILE_SUCCESS',
  PROMOTION_PROFILE_FAILED = 'PROMOTION_PROFILE_FAILED',
}

// TYPES

export type TUpdatePromotionRequest = {
  type: EUpdatePromotionAction.PROMOTION_PROFILE_REQUEST;
  payload: {
    materials: TUpdatePromotionMaterials;
    successCallback?: (response: TUpdatePromotionResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TUpdatePromotionSuccess = {
  type: EUpdatePromotionAction.PROMOTION_PROFILE_SUCCESS;
  payload: { response: TUpdatePromotionResponse };
};

export type TUpdatePromotionFailed = { type: EUpdatePromotionAction.PROMOTION_PROFILE_FAILED };

// FUNCTION

export const updatePromotionAction = {
  request: createActionCreator(
    EUpdatePromotionAction.PROMOTION_PROFILE_REQUEST,
    (resolve) =>
      (
        materials: TUpdatePromotionMaterials,
        successCallback?: (response: TUpdatePromotionResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TUpdatePromotionRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EUpdatePromotionAction.PROMOTION_PROFILE_SUCCESS,
    (resolve) =>
      (response: TUpdatePromotionResponse): TUpdatePromotionSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EUpdatePromotionAction.PROMOTION_PROFILE_FAILED,
    (resolve) =>
      (error: unknown): TUpdatePromotionFailed =>
        resolve({ error }),
  ),
};
