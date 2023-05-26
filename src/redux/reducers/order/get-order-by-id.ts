import { TOrdersState } from '@/redux/reducers/order';
import { TGetOrderByIdSuccess } from '@/redux/actions/order';

export const getOrderByIdUpdateState = (state: TOrdersState, action: TGetOrderByIdSuccess): TOrdersState => ({
  ...state,
  getOrderByIdResponse: action.payload.response,
});
