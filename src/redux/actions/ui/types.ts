import { EUIAction } from './constants';

export type TSetDevice = { type: EUIAction.SET_DEVICE; payload: { deviceWidth: number } };
export type TSetCountDownMarathon = { type: EUIAction.COUNTDOWN_MARATHON; payload: { timestamp: number } };
export type TResetActionStatus = { type: EUIAction.RESET_ACTION_STATUS };
