import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { addressAction, districtAction, wardAction } from '@/redux/actions';
import { address, city, district, TAddressResponse, TDistrictResponse, TWardResponse, ward } from '@/services/api';
import { cityAction } from '@/redux/actions/address/city';
import { TCityResponse } from '@/services/api/address/city';

// FUNCTION

export function* addressSaga(action: ActionType<typeof addressAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(address, materials);
    const addressResponse: TAddressResponse = response as TAddressResponse;
    yield put(addressAction.success(addressResponse));
    successCallback?.(addressResponse);
  } catch (err) {
    yield put(addressAction.failure(err));
    failedCallback?.(err);
  }
}
export function* citySaga(action: ActionType<typeof cityAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(city, materials);
    const cityResponse: TCityResponse = response as TCityResponse;
    yield put(cityAction.success(cityResponse));
    successCallback?.(cityResponse);
  } catch (err) {
    yield put(cityAction.failure(err));
    failedCallback?.(err);
  }
}
export function* districtSaga(action: ActionType<typeof districtAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(district, materials);
    console.log('res', response);
    const districtResponse: TDistrictResponse = response as TDistrictResponse;
    yield put(districtAction.success(districtResponse));
    successCallback?.(districtResponse);
  } catch (err) {
    yield put(districtAction.failure(err));
    failedCallback?.(err);
  }
}
export function* wardSaga(action: ActionType<typeof wardAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(ward, materials);
    const wardResponse: TWardResponse = response as TWardResponse;
    yield put(wardAction.success(wardResponse));
    successCallback?.(wardResponse);
  } catch (err) {
    yield put(wardAction.failure(err));
    failedCallback?.(err);
  }
}
