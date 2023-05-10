import { createReducer } from 'deox';
import { addressAction, districtAction, wardAction } from '@/redux/actions';
import { TSelectOption } from '@/components/Select';
import { cityAction } from '@/redux/actions/address/city';

export interface IUIState {
  countries: TSelectOption[];
  cities: TSelectOption[];
  districts: TSelectOption[];
  wards: TSelectOption[];
}
const initialState: IUIState = {
  countries: [],
  cities: [],
  districts: [],
  wards: [],
};

export const parseToOptions = (data: any): TSelectOption[] =>
  data?.map((item: { _id: any; name: any; level: any }) => ({
    value: item._id,
    label: item.name,
    level: item.level,
  })) || [];

const AddressReducer = createReducer(initialState, (handleAction) => [
  handleAction(addressAction.success, (state, { payload }) => {
    const { response } = payload;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return { ...state, countries: parseToOptions(response.data.countries) };
  }),
  handleAction(cityAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      cities: parseToOptions(response.data),
    };
  }),
  handleAction(districtAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      districts: parseToOptions(response.data),
    };
  }),
  handleAction(wardAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      wards: parseToOptions(response.data),
    };
  }),
]);

export default AddressReducer;
