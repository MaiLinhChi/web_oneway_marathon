import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';

import Upload from '@/components/Upload/Upload';
import { handleErrorImageUrl } from '@/utils/functions';
import { REGEX } from '@/common/constants';
import LoadingSpin from '@/assets/icons/icon-loading-spin.svg';
import { TUploadAvatarProps } from './UploadAvatar.types.d';
import './UploadAvatar.scss';
import AuthHelpers from '@/services/helpers';
import { getProfileAction } from '@/redux/actions';
import { useDispatch } from 'react-redux';

const UploadAvatar: React.FC<TUploadAvatarProps> = ({
  value,
  onChange,
  overlay,
  typePreview = 'scale',
  uploadLoading,
}) => {
  const dispatch = useDispatch();
  const [previewImage, setPreviewImage] = useState<string>();
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const atk = AuthHelpers.getAccessToken();
  const handleUploadChange = (file: any): void => {
    if (file) {
      setPreviewImage(process.env.REACT_APP_SERVICE_BASE_URL + file?.avatar);
      setIsChanged(true);
      onChange?.(file);
      getProfile();
    }
  };
  const getProfile = useCallback(() => {
    const params = {
      authorization: `Bearer ${atk}`,
    };
    dispatch(getProfileAction.request({ params }));
  }, [dispatch, atk]);
  useEffect(() => {
    if (!isChanged) {
      if (REGEX.url.test(value)) {
        setPreviewImage(process.env.REACT_APP_SERVICE_BASE_URL + value);
      } else {
        setIsChanged(false);
        setPreviewImage(process.env.REACT_APP_SERVICE_BASE_URL + value);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return (
    <div className="UploadAvatar">
      <Upload disabled={uploadLoading} accept=".jpg, .png, .jpeg" onChange={handleUploadChange}>
        <div className="UploadAvatar-wrapper">
          {previewImage ? (
            <div className={classNames('UploadAvatar-preview', typePreview)}>
              <img src={previewImage} alt="" onError={handleErrorImageUrl} />
              {uploadLoading && (
                <div className="UploadAvatar-loading flex items-center justify-center">
                  <img src={LoadingSpin} alt="" />
                </div>
              )}
            </div>
          ) : (
            <div className="UploadAvatar-placeholder flex items-center justify-center" />
          )}
          {overlay && <div className="UploadAvatar-overlay">{overlay}</div>}
        </div>
      </Upload>
    </div>
  );
};

export default UploadAvatar;
