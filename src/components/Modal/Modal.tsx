import React from 'react';
import { Modal as AntdModal } from 'antd';
import classNames from 'classnames';

import Button from '@/components/Button';

import { TModalProps } from './Modal.types';
import './Modal.scss';

const Modal: React.FC<TModalProps> = ({
  visible,
  cancelButton,
  confirmButton,
  loadingConfirmButton,
  centered,
  width,
  wrapClassName,
  className,
  closeable,
  hideFooter,
  onClose,
  onSubmit,
  children,
}) => {
  return (
    <AntdModal
      footer={null}
      title={null}
      closable={closeable}
      visible={visible}
      width={width}
      centered={centered}
      onCancel={onClose}
      wrapClassName={classNames('Modal-wrapper', wrapClassName)}
      className={classNames('Modal', className)}
    >
      <div className="Modal-body">{children}</div>

      {!hideFooter && (
        <div
          className={classNames('Modal-footer flex justify-between', {
            single: (confirmButton && !cancelButton) || (!confirmButton && cancelButton),
          })}
        >
          {confirmButton && <Button onClick={onSubmit} {...confirmButton} loading={loadingConfirmButton} />}
          {cancelButton && <Button onClick={onClose} {...cancelButton} />}
        </div>
      )}
    </AntdModal>
  );
};

export default Modal;
