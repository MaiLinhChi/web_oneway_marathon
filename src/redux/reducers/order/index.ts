import { createReducer } from 'deox';
import { addOrderAction, getOrderByIdAction, getOrdersAction, updateOrderAction } from '@/redux/actions';
import {
  TAddOrderResponse,
  TUpdateOrderResponse,
  TPayOrderResponse,
  TGetOrderByIdResponse,
  TGetOrdersResponse,
} from '@/services/api';
import { addOrderUpdateState } from '@/redux/reducers/order/add-order';
import { updateOrderUpdateState } from './update-order';
import { getOrderByIdUpdateState } from './get-order-by-id';
import { getOrdersUpdateState } from './get-orders';

export type TOrdersState = {
  addOrder?: TAddOrderResponse;
  updateOrder?: TUpdateOrderResponse;
  getOrderByIdResponse?: TGetOrderByIdResponse;
  getOrdersResponse?: TGetOrdersResponse;
  payOrderResponse?: TPayOrderResponse;
};

const initialState: TOrdersState = {
  addOrder: undefined,
  updateOrder: undefined,
  getOrderByIdResponse: undefined,
  payOrderResponse: undefined,
  getOrdersResponse: undefined,
};

const OrdersReducer = createReducer(initialState, (handleAction) => [
  handleAction(addOrderAction.success, addOrderUpdateState),
  handleAction(updateOrderAction.success, updateOrderUpdateState),
  handleAction(getOrderByIdAction.success, getOrderByIdUpdateState),
  handleAction(getOrdersAction.success, getOrdersUpdateState),
]);

export default OrdersReducer;
