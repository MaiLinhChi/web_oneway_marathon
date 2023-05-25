import { createReducer } from 'deox';

import { TGetBibDetailResponse, TUpdateBibResponse } from '@/services/api/bib';
import { UpdateBibAction, getBibDetailAction } from '@/redux/actions';
import { updateBibUpdateState } from './update-bib';
import { getBibDetaillUpdateState } from './bib-detail';

export type TBibsState = {
  getBibDetailResponse?: TGetBibDetailResponse;
  updateBibResponse?: TUpdateBibResponse;
};

const initialState: TBibsState = {
  getBibDetailResponse: undefined,
  updateBibResponse: undefined,
};

const OrderDetailReducer = createReducer(initialState, (handleAction) => [
  handleAction(getBibDetailAction.success, getBibDetaillUpdateState),
  handleAction(UpdateBibAction.success, updateBibUpdateState),
]);

export default OrderDetailReducer;
