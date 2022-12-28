import React, { useState } from 'react';
import { Col, Form, Row } from 'antd';

import { validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button from '@/components/Button';

import { TChangePasswordProps } from './ChangePassword.types';
import './ChangePassword.scss';

const ChangePassword: React.FC<TChangePasswordProps> = () => {
  const [form] = Form.useForm();
  const [, setFormValues] = useState({});
  const { newPassword } = form.getFieldsValue();

  return (
    <div className="ChangePassword">
      <Form form={form} onValuesChange={setFormValues}>
        <Row gutter={[32, 24]}>
          <Col lg={{ span: 12 }} xs={{ span: 24 }}>
            <Form.Item name="oldPassword" rules={[validationRules.required()]}>
              <Input type="password" placeholder="Mật khẩu hiện tại" />
            </Form.Item>
          </Col>
          <Col lg={{ span: 12 }} xs={{ span: 24 }}>
            <Form.Item name="newPassword" rules={[validationRules.required()]}>
              <Input type="password" placeholder="Mật khẩu hiện tại" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="confirmNewPassword"
              rules={[validationRules.required(), validationRules.confirmPassword(newPassword)]}
            >
              <Input type="password" placeholder="Mật khẩu hiện tại" />
            </Form.Item>
          </Col>
          <Col span={24} />
          <Col span={24}>
            <div className="flex justify-end">
              <Button title="Lưu thay đổi" htmlType="submit" type="primary" />
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ChangePassword;
