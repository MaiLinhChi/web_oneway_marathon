import { createReducer } from 'deox';
import { uiActions } from '@/redux/actions';

export enum EDeviceType {
  DESKTOP = 'desktop',
  MOBILE = 'mobile',
}

const initialState = {
  device: {
    type: window.innerWidth > 991 ? EDeviceType.DESKTOP : EDeviceType.MOBILE,
    width: window.innerWidth,
  },
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(uiActions.setDevice, (state, { payload }) => ({
    ...state,
    device: {
      type: payload.deviceWidth > 991 ? EDeviceType.DESKTOP : EDeviceType.MOBILE,
      width: payload.deviceWidth,
    },
  })),
]);

export default reducer;
