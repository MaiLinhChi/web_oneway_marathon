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
    isMobile: window.innerWidth <= 991,
  },
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(uiActions.setDevice, (state, { payload }) => ({
    ...state,
    device: {
      type: payload.deviceWidth > 991 ? EDeviceType.DESKTOP : EDeviceType.MOBILE,
      width: payload.deviceWidth,
      isMobile: window.innerWidth <= 991,
    },
  })),
]);

export default reducer;
