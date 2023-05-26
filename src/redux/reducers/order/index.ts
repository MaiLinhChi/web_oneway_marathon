import { createReducer } from 'deox';
import { addOrderAction, getOrderByIdAction, updateOrderAction } from '@/redux/actions';
import { TAddOrderResponse, TUpdateOrderResponse, TPayOrderResponse, TGetOrderByIdResponse } from '@/services/api';
import { addOrderUpdateState } from '@/redux/reducers/order/add-order';
import { updateOrderUpdateState } from './update-order';
import { getOrderByIdUpdateState } from './get-order-by-id';

export type TOrdersState = {
  addOrder?: TAddOrderResponse;
  updateOrder?: TUpdateOrderResponse;
  getOrderByIdResponse?: TGetOrderByIdResponse;
  payOrderResponse?: TPayOrderResponse;
};

const initialState: TOrdersState = {
  addOrder: undefined,
  updateOrder: undefined,
  getOrderByIdResponse: undefined,
  payOrderResponse: undefined,
};

const OrdersReducer = createReducer(initialState, (handleAction) => [
  handleAction(addOrderAction.success, addOrderUpdateState),
  handleAction(updateOrderAction.success, updateOrderUpdateState),
  handleAction(getOrderByIdAction.success, getOrderByIdUpdateState),
]);

export default OrdersReducer;
