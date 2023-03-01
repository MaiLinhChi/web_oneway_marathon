import { TPromotionState } from '@/redux/reducers/promotion';
import { TUpdatePromotionSuccess } from '@/redux/actions/promotion';

export const updatePromotionUpdateState = (state: TPromotionState, action: TUpdatePromotionSuccess): any => ({
  ...state,
  updatePromotionResponse: action.payload.response,
});
