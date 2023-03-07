import React, { useState } from 'react';
import { Col, Form, Row } from 'antd';

import { showNotification, validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button from '@/components/Button';

import { TChangePasswordProps } from './ChangePassword.types';
import './ChangePassword.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changePasswordProfileAction, EChangePasswordProfileAction } from '@/redux/actions';
import { EResponseCode, ETypeNotification } from '@/common/enums';

const ChangePassword: React.FC<TChangePasswordProps> = () => {
  const [form] = Form.useForm();
  const [, setFormValues] = useState({});
  const { newPassword } = form.getFieldsValue();
  const dispatch = useDispatch();
  const loading = useSelector(
    (state: any) => state.loadingReducer[EChangePasswordProfileAction.CHANGE_PASSWORD_PROFILE],
  );
  const handleSubmit = (values: any): void => {
    const body = { ...values };

    dispatch(changePasswordProfileAction.request({ body }, (response): void => handlerChangePasswordSuccess(response)));
  };
  const handlerChangePasswordSuccess = (response: any): void => {
    if (response.status === EResponseCode.OK) {
      showNotification(ETypeNotification.SUCCESS, 'Đổi mật khẩu thành công !');
      form.resetFields();
    } else {
      showNotification(ETypeNotification.ERROR, response.message);
    }
  };
  return (
    <div className="ChangePassword">
      <Form form={form} onValuesChange={setFormValues} onFinish={handleSubmit}>
        <Row gutter={[32, 24]}>
          <Col lg={{ span: 12 }} xs={{ span: 24 }}>
            <Form.Item name="password" rules={[validationRules.required()]}>
              <Input type="password" placeholder="Mật khẩu hiện tại" />
            </Form.Item>
          </Col>
          <Col lg={{ span: 12 }} xs={{ span: 24 }}>
            <Form.Item name="newPassword" rules={[validationRules.required()]}>
              <Input type="password" placeholder="Mật khẩu mới" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="newPasswordConfirmation"
              rules={[validationRules.required(), validationRules.confirmPassword(newPassword)]}
            >
              <Input type="password" placeholder="Nhập lại mật khẩu mới" />
            </Form.Item>
          </Col>
          <Col span={24} />
          <Col span={24}>
            <div className="flex justify-end">
              <Button title="Lưu thay đổi" loading={loading} htmlType="submit" type="primary" />
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ChangePassword;
