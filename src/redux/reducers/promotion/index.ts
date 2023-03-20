import { createReducer } from 'deox';

import { TUpdatePromotionResponse } from '@/services/api/promotion';
import { updatePromotionAction } from '@/redux/actions';
import { updatePromotionUpdateState } from './promotion';

export type TPromotionState = {
  updatePromotionResponse?: TUpdatePromotionResponse;
};

const initialState: TPromotionState = {
  updatePromotionResponse: undefined,
};

const PromotionReducer = createReducer(initialState, (handleAction) => [
  handleAction(updatePromotionAction.success, updatePromotionUpdateState),
]);

export default PromotionReducer;
