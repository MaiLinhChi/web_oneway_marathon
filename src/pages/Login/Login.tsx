import React from 'react';
import { Form } from 'antd';
import { useDispatch } from 'react-redux';

import { LayoutPaths, Paths } from '@/pages/routers';
import { Link } from '@reach/router';
import { validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { EIconName } from '@/components/Icon';

const Login: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const handleSubmit = (values: any): void => {};

  return (
    <div className="Login">
      <div className="container">
        <div className="Login-wrapper">
          <div className="Auth-form">
            <Form form={form} onFinish={handleSubmit}>
              <div className="Auth-form-wrapper">
                <div className="Auth-form-title">Đăng nhập</div>

                <Form.Item name="username" rules={[validationRules.required()]}>
                  <Input placeholder="Tên đăng nhập/email cá nhân *" />
                </Form.Item>
                <Form.Item name="username" rules={[validationRules.required()]}>
                  <Input type="password" placeholder="Mật khẩu *" />
                </Form.Item>

                <Link to={`${LayoutPaths.Auth}${Paths.ForgotPassword}`} className="Auth-form-link text-right">
                  Quên mật khẩu
                </Link>

                <div className="Auth-form-submit">
                  <Button title="Đăng nhập" size="large" htmlType="submit" type="primary" />
                </div>

                <div className="Auth-form-or">
                  <span>hoặc</span>
                </div>

                <div className="Auth-form-btn" style={{ marginBottom: '2.4rem' }}>
                  <Button
                    reverse
                    size="large"
                    title="Sử dụng tài khoản Google"
                    type="ghost"
                    fontWeight={600}
                    iconName={EIconName.Google}
                  />
                </div>
                <div className="Auth-form-btn">
                  <Button
                    reverse
                    size="large"
                    title="Sử dụng tài khoản Facebook"
                    type="ghost"
                    fontWeight={600}
                    iconName={EIconName.Facebook}
                  />
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
