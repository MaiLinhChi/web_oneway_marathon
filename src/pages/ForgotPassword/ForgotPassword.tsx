import React, { useState } from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { LayoutPaths, Paths } from '@/pages/routers';
import { Link, navigate } from '@reach/router';
import { validationRules, showNotification } from '@/utils/functions';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { EResponseCode, ETypeNotification } from '@/common/enums';
import { changePasswordForgotAction, getOtpPasswordForgotAction, EOtpPasswordForgotAction } from '@/redux/actions';

const ForgotPassword: React.FC = () => {
  const [formOtp] = Form.useForm();
  const [formChangePass] = Form.useForm();
  const [email, setEmail] = useState('');
  const loginLoading = useSelector((state: any) => state.loadingReducer[EOtpPasswordForgotAction.GET_OTP]);
  const dispatch = useDispatch();

  const handleSubmit = (values: any): void => {
    if (email) {
      const body = {
        email,
        ...values,
      };
      dispatch(
        changePasswordForgotAction.request({ body }, (response): void => handlerChangePasswordSuccess(response)),
      );
    } else {
      dispatch(
        getOtpPasswordForgotAction.request({ params: values }, (response): void => handlerGetOtpSuccess(response)),
      );
    }
  };
  const handlerChangePasswordSuccess = (response: any): void => {
    if (response.status === EResponseCode.OK) {
      setEmail('');
      showNotification(ETypeNotification.SUCCESS, 'Thay đổi mật khẩu thành công');
      formChangePass.resetFields();
      navigate(LayoutPaths.Auth + Paths.Home);
    } else {
      showNotification(ETypeNotification.ERROR, response.message);
    }
  };
  const handlerGetOtpSuccess = (response: any): void => {
    if (response.status === EResponseCode.OK) {
      setEmail(formOtp.getFieldValue('email'));
      showNotification(ETypeNotification.SUCCESS, response.data.message);
      formOtp.resetFields();
    } else {
      showNotification(ETypeNotification.ERROR, response.message);
    }
  };
  return (
    <div className="ForgotPassword">
      <div className="container">
        <div className="ForgotPassword-wrapper">
          <div className="Auth-form">
            {email ? (
              <Form form={formChangePass} onFinish={handleSubmit}>
                <div className="Auth-form-wrapper">
                  <div className="Auth-form-title">Đặt lại mật khẩu mới</div>
                  <span>Xin chào {email}</span>
                  <Form.Item name="code" rules={[validationRules.maxLength(4), validationRules.minLength(4)]}>
                    <Input placeholder="Mã OTP" required={true} />
                  </Form.Item>

                  <Form.Item name="password" rules={[validationRules.minLength(8)]}>
                    <Input placeholder="Nhập mậu khẩu mới" required={true} type="password" />
                  </Form.Item>

                  <div className="Auth-form-submit">
                    <Button title="Xác nhận" size="large" htmlType="submit" type="primary" />
                  </div>
                </div>
              </Form>
            ) : (
              <Form form={formOtp} onFinish={handleSubmit}>
                <div className="Auth-form-wrapper">
                  <div className="Auth-form-title">Quên mật khẩu</div>

                  <Form.Item name="email" rules={[validationRules.email()]}>
                    <Input placeholder="Email cá nhân" required={true} />
                  </Form.Item>

                  <div className="Auth-form-submit">
                    <Button title="Tiếp tục" size="large" htmlType="submit" type="primary" loading={loginLoading} />
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
