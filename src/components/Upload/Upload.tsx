import React, { useRef } from 'react';
import classNames from 'classnames';

import { TUploadProps } from './Upload.types';
import './Upload.scss';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from '@/redux/reducers';
import { EUploadAction, uploadAction } from '@/redux/actions';
import { showNotification } from '@/utils/functions';
import { ETypeNotification } from '@/common/enums';

const Upload: React.FC<TUploadProps> = ({ className, accept, multiple, children, disabled, onChange }) => {
  const inputFilesRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const uploadLoading = useSelector((state: TRootState) => state.loadingReducer[EUploadAction.UPLOAD]);
  const disabledUpload = disabled || uploadLoading;
  const handleClickUpload = (): void => {
    if (!disabled) inputFilesRef?.current?.click();
  };

  const handleChangeUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { files } = event.target;
    if (files) {
      const filesArray = Array.from(files);
      const formData = new FormData();
      filesArray.forEach((item) => {
        formData.append('photo', item);
      });
      dispatch(uploadAction.request({ body: formData }, handleUploadSuccess));
    }
  };
  const handleUploadSuccess = (response: any): void => {
    if (response.status === 200) {
      if (inputFilesRef.current) inputFilesRef.current.value = '';
      onChange?.(response.data?.user);
      showNotification(ETypeNotification.SUCCESS, 'Upload thành công');
    }
  };
  return (
    <div className={classNames('Upload', { disabled: disabledUpload }, className)}>
      <div className="Upload-wrapper" onClick={handleClickUpload}>
        {children}
      </div>
      <input
        ref={inputFilesRef}
        className="Upload-input"
        accept={accept}
        type="file"
        multiple={multiple}
        onChange={handleChangeUpload}
      />
    </div>
  );
};

export default Upload;
