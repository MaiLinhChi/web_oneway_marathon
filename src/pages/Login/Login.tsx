import React from 'react';
import { Col, Form, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { LayoutPaths, Paths } from '@/pages/routers';
import { Link, navigate } from '@reach/router';
import { showNotification, validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { EIconName } from '@/components/Icon';
import { TAuthLoginResponse } from '@/services/api';
import { authLoginAction, EAuthLoginAction } from '@/redux/actions';
import { EResponseCode, ETypeNotification } from '@/common/enums';

const Login: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const loginLoading = useSelector((state: any) => state.loadingReducer[EAuthLoginAction.AUTH_LOGIN]);
  const handleSubmit = (values: any): void => {
    const body = { ...values };

    dispatch(authLoginAction.request({ body }, (response): void => handleLoginSuccess(response)));
  };

  const handleLoginSuccess = (response: any): void => {
    if (response.status === EResponseCode.OK) {
      showNotification(ETypeNotification.SUCCESS, 'Đăng nhập thành công !');
      navigate(Paths.Home);
    } else {
      console.log('response', response);
      showNotification(ETypeNotification.ERROR, response.message);
    }
  };
  return (
    <div className="Login">
      <div className="container">
        <div className="Login-wrapper">
          <Row justify="space-between">
            <Col lg={10} xs={24}>
              <h2>OneWay</h2>
              <p>
                Trở thành thành viên của OneWay để tham gia giải chạy nhanh nhất và quản lý thông tin đăng ký của bạn dễ
                dàng nhất.
              </p>
              <p>
                Bạn chưa có tài khoản? <a href={`${LayoutPaths.Auth}${Paths.Register}`}>Tạo tài khoản</a>
              </p>
            </Col>
            <Col lg={13} xs={24}>
              <div className="Auth-form">
                <Form form={form} onFinish={handleSubmit}>
                  <div className="Auth-form-wrapper">
                    <div className="Auth-form-title">Đăng nhập</div>

                    <Form.Item name="username" rules={[validationRules.required()]}>
                      <Input placeholder="Tên đăng nhập/email cá nhân" required={true} />
                    </Form.Item>
                    <Form.Item name="password" rules={[validationRules.required()]}>
                      <Input type="password" placeholder="Mật khẩu" required={true} />
                    </Form.Item>

                    <Link to={`${LayoutPaths.Auth}${Paths.ForgotPassword}`} className="Auth-form-link text-right">
                      Quên mật khẩu
                    </Link>

                    <div className="Auth-form-submit">
                      <Button title="Đăng nhập" size="large" loading={loginLoading} htmlType="submit" type="primary" />
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
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Login;
