import { createReducer } from 'deox';
import { TSelectOption } from '@/components/Select';
import { getClubsAction } from '@/redux/actions/club';

export interface IUIState {
  clubs: TSelectOption[];
}
const initialState: IUIState = {
  clubs: [],
};

export const parseToOptions = (data: any): TSelectOption[] =>
  data?.map((item: { _id: any; clubName: any }) => ({
    value: item._id,
    label: item.clubName,
  })) || [];

const ClubsReducer = createReducer(initialState, (handleAction) => [
  handleAction(getClubsAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      clubs: parseToOptions(response.data),
    };
  }),
]);

export default ClubsReducer;
