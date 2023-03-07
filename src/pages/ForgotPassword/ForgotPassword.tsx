import React from 'react';
import { Form } from 'antd';
import { useDispatch } from 'react-redux';

import { LayoutPaths } from '@/pages/routers';
import { Link } from '@reach/router';
import { validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button from '@/components/Button';

const ForgotPassword: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const handleSubmit = (values: any): void => {};

  return (
    <div className="ForgotPassword">
      <div className="container">
        <div className="ForgotPassword-wrapper">
          <div className="Auth-form">
            <Form form={form} onFinish={handleSubmit}>
              <div className="Auth-form-wrapper">
                <div className="Auth-form-title">Quên mật khẩu</div>

                <Form.Item name="username" rules={[validationRules.required()]}>
                  <Input placeholder="Tên đăng nhập/email cá nhân" required={true} />
                </Form.Item>

                <div className="Auth-form-submit">
                  <Button title="Lấy lại mật khẩu" size="large" htmlType="submit" type="primary" />
                </div>

                <div className="Auth-form-or">
                  <span>hoặc</span>
                </div>

                <div className="Auth-form-text text-center flex justify-center" style={{ columnGap: '.4rem' }}>
                  Bạn đã có tài khoản{' '}
                  <Link to={LayoutPaths.Auth} className="Auth-form-link">
                    đăng nhập
                  </Link>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
