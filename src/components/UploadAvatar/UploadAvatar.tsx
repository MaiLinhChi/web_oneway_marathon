import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import Upload from '@/components/Upload/Upload';
import { handleErrorImageUrl } from '@/utils/functions';
import { REGEX } from '@/common/constants';

import { TUploadAvatarProps } from './UploadAvatar.types.d';
import './UploadAvatar.scss';

const UploadAvatar: React.FC<TUploadAvatarProps> = ({ value, onChange, overlay, typePreview = 'scale' }) => {
  const [previewImage, setPreviewImage] = useState<string>();
  const [isChanged, setIsChanged] = useState<boolean>(false);

  const handleUploadChange = (files: FileList | null): void => {
    if (files) {
      const file = Array.from(files)?.[0];
      setPreviewImage(URL.createObjectURL(file));
      setIsChanged(true);
      onChange?.(file);
    }
  };

  useEffect(() => {
    if (!isChanged) {
      if (REGEX.url.test(value || '')) {
        setPreviewImage(value);
      } else if ((value as any)?.lastModified) {
        setPreviewImage(URL.createObjectURL(value as any));
      } else {
        setIsChanged(false);
        setPreviewImage('');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="UploadAvatar">
      <Upload accept=".jpg, .png, .jpeg" onChange={handleUploadChange}>
        <div className="UploadAvatar-wrapper">
          {previewImage ? (
            <div className={classNames('UploadAvatar-preview', typePreview)}>
              <img src={previewImage} alt="" onError={handleErrorImageUrl} />
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
