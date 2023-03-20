import { createReducer } from 'deox';

import { TGetOrderDetailResponse } from '@/services/api/orders';
import { getOrderDetailAction } from '@/redux/actions';
import { getOrderDetailUpdateState } from '@/redux/reducers/orders/order-detail';

export type TOrderDetailState = {
  getOrderDetailResponse?: TGetOrderDetailResponse;
};

const initialState: TOrderDetailState = {
  getOrderDetailResponse: undefined,
};

const OrderDetailReducer = createReducer(initialState, (handleAction) => [
  handleAction(getOrderDetailAction.success, getOrderDetailUpdateState),
]);

export default OrderDetailReducer;
