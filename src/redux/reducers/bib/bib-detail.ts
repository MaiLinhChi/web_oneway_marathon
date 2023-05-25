import { TBibsState } from '@/redux/reducers/bib';
import { TGetBibDetailSuccess } from '@/redux/actions/bib';

export const getBibDetaillUpdateState = (state: TBibsState, action: TGetBibDetailSuccess): TBibsState => ({
  ...state,
  getBibDetailResponse: action.payload.response,
});
