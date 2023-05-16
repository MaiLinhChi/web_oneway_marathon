import { getType } from 'deox';
import { AxiosError } from 'axios';

import { uiActions } from '@/redux/actions';
import { showNotification } from '@/utils/functions';
import { ETypeNotification, EViMessageCode } from '@/common/enums';

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
      (axiosErrorData?.messageKey as string) ||
      (axiosErrorData?.message as string) ||
      (axiosErrorData?.error_description as string) ||
      (axiosErrorData?.errors?.[0].message as string) ||
      (error?.message as string);
    if (error && !isNotShowToast) {
      showNotification(
        ETypeNotification.ERROR,
        axiosErrorData?.messageKey ? EViMessageCode[error as keyof typeof EViMessageCode] : error,
      );
    }
  }

  return {
    ...state,
    [requestName]: requestState === 'FAILED' && error ? { error, code } : null,
  };
};

export default errorReducer;
