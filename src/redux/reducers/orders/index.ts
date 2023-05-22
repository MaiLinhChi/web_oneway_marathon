import { createReducer } from 'deox';

import { TGetOrderDetailResponse, TGetOrdersResponse } from '@/services/api/orders';
import { getOrderDetailAction, getOrdersAction } from '@/redux/actions';
import { getOrderDetailUpdateState } from '@/redux/reducers/orders/order-detail';
import { getOrderslUpdateState } from './get-orders';

export type TOrdersState = {
  getOrderDetailResponse?: TGetOrderDetailResponse;
  getOrdersResponse?: TGetOrdersResponse;
};

const initialState: TOrdersState = {
  getOrderDetailResponse: undefined,
  getOrdersResponse: undefined,
};

const OrderDetailReducer = createReducer(initialState, (handleAction) => [
  handleAction(getOrderDetailAction.success, getOrderDetailUpdateState),
  handleAction(getOrdersAction.success, getOrderslUpdateState),
]);

export default OrderDetailReducer;
