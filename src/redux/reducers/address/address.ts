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
  data?.map((item: { id: any; name: any; code: any }) => ({ id: item.id, label: item.name, value: item.id })) || [];

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
      cities: parseToOptions(response.data.cities),
    };
  }),
  handleAction(districtAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      districts: parseToOptions(response.data.districts),
    };
  }),
  handleAction(wardAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      wards: parseToOptions(response.data.wards),
    };
  }),
]);

export default AddressReducer;
