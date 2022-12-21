import { getType } from 'deox';
import { AxiosError } from 'axios';

import { uiActions } from '@/redux/actions';
import { showNotification } from '@/utils/functions';
import { ETypeNotification } from '@/common/enums';

export type TErrorState = { [id: string]: { error: null | Error | string; code?: number } | null };

interface IErrorPayload {
  error: Error | string;
}

interface IErrorAction {
  type: string;
  payload?: IErrorPayload;
}

interface IResetAction {
  type: string;
  payload: {
    actionName: string;
  };
}

const getErrorMatches = (actionType: string): RegExpExecArray | null => /(.*)_(REQUEST|FAILED)/.exec(actionType);

const errorReducer = (state: TErrorState = {}, action: IErrorAction | IResetAction): TErrorState => {
  if (action.type === getType(uiActions.resetActionStatus)) {
    const { actionName } = (action as IResetAction).payload;
    const { [actionName]: _, ...newState } = state;
    return newState;
  }

  const matches = getErrorMatches(action.type);

  if (!matches) {
    return state;
  }

  const [, requestName, requestState] = matches;

  let code;

  let error = (action as IErrorAction).payload?.error;

  if (error instanceof Error) {
    const axiosErrorData: any = (error as AxiosError)?.response?.data;

    const requestNameArray: string[] = []; // Put Request Name here to disabled show notification toast
    const isNotShowToast = requestNameArray.includes(requestName);

    error =
      axiosErrorData?.message ||
      axiosErrorData?.error_description ||
      axiosErrorData?.errors?.[0].message ||
      error?.message;

    if (error && !isNotShowToast) showNotification(ETypeNotification.ERROR, error as string);
  }

  return {
    ...state,
    [requestName]: requestState === 'FAILED' && error ? { error, code } : null,
  };
};

export default errorReducer;
