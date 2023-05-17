import { createActionCreator } from 'deox';

import { EUIAction } from './constants';
import { TResetActionStatus, TSetDevice, TSetCountDownMarathon } from './types';

export const uiActions = {
  setDevice: createActionCreator(
    EUIAction.SET_DEVICE,
    (resolve) =>
      (deviceWidth: number): TSetDevice =>
        resolve({ deviceWidth }),
  ),
  resetActionStatus: createActionCreator(
    EUIAction.RESET_ACTION_STATUS,
    (resolve) =>
      (actionName: string): TResetActionStatus =>
        resolve({ actionName: actionName.replace('_REQUEST', '') }),
  ),
  setCountdown: createActionCreator(
    EUIAction.COUNTDOWN_MARATHON,
    (resolve) =>
      (timestamp: number): TSetCountDownMarathon =>
        resolve({ timestamp }),
  ),
};
