import { TBibsState } from '@/redux/reducers/bib';
import { TGetBibDetailSuccess } from '@/redux/actions/bib';

export const updateBibUpdateState = (state: TBibsState, action: TGetBibDetailSuccess): TBibsState => ({
  ...state,
  updateBibResponse: action.payload.response,
});
