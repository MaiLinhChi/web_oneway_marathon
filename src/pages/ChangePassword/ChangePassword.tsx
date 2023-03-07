import React, { useState } from 'react';
import { Form } from 'antd';
import { useDispatch } from 'react-redux';

import { validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button from '@/components/Button';

const ChangePassword: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const [, setFormValues] = useState({});

  const { password } = form.getFieldsValue();

  const handleSubmit = (values: any): void => {};

  return (
    <div className="ChangePassword">
      <div className="container">
        <div className="ChangePassword-wrapper">
          <div className="Auth-form">
            <Form form={form} onFinish={handleSubmit} onValuesChange={setFormValues}>
              <div className="Auth-form-wrapper">
                <div className="Auth-form-title">Đổi mật khẩu</div>

                <Form.Item name="password" rules={[validationRules.required()]}>
                  <Input type="password" placeholder="Nhập lại mật khẩu mới" />
                </Form.Item>

                <Form.Item
                  name="confirmPassword"
                  rules={[validationRules.required(), validationRules.confirmPassword(password)]}
                >
                  <Input type="password" placeholder="Mật khẩu mới" />
                </Form.Item>

                <div className="Auth-form-submit">
                  <Button title="Đổi mật khẩu" size="large" htmlType="submit" type="primary" />
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
