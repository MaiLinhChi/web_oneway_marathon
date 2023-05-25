import { all, takeLatest } from 'redux-saga/effects';

import { getBibDetailAction, UpdateBibAction } from '@/redux/actions';
import { getBibDetailSaga } from '@/redux/sagas/bib/bib-detail';
import { updateBibSaga } from '@/redux/sagas/bib/update-bib';

export default function* root(): Generator {
  yield all([
    takeLatest(getBibDetailAction.request.type, getBibDetailSaga),
    takeLatest(UpdateBibAction.request.type, updateBibSaga),
  ]);
}
