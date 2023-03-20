import React from 'react';
import { Col, Form, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from '@/components/Checkbox';

import { LayoutPaths, Paths } from '@/pages/routers';
import { Link, navigate } from '@reach/router';
import { showNotification, validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { authSignUpAction, EAuthSignUpAction } from '@/redux/actions';
import { EResponseCode, ETypeNotification } from '@/common/enums';

const Register: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const loginLoading = useSelector((state: any) => state.loadingReducer[EAuthSignUpAction.SIGNUP]);
  const handleSubmit = (values: any): void => {
    const body = { ...values };

    dispatch(authSignUpAction.request({ body }, (response): void => handleSignUpSuccess(response)));
  };

  const handleSignUpSuccess = (response: any): void => {
    if (response.status === EResponseCode.OK) {
      showNotification(ETypeNotification.SUCCESS, 'Đăng ký tài khoản thành công !');
      navigate(LayoutPaths.Auth + Paths.Login);
    } else {
      showNotification(ETypeNotification.ERROR, response.message);
    }
  };
  return (
    <div className="Login">
      <div className="container Login-wrapper">
        <h2>
          <span>Tạo tài khoản </span>OneWay Marathon
        </h2>
        <p>
          Tạo tài khoản ngay - trở thành thành viên của OneWay để tham gia giải chạy nhanh nhất và quản lý thông tin
          đăng ký của bạn dễ dàng nhất. <br /> Nếu bạn đã có tài khoản,
          <a href={`${LayoutPaths.Auth}${Paths.Login}`}> đăng nhập tại đây</a>.
        </p>
      </div>
      <div className="Login-wrapper">
        <div className="Auth-form-register">
          <div className="container">
            <Form form={form} onFinish={handleSubmit}>
              <div className="Auth-form-wrapper">
                <div className="Auth-form-group">
                  <div className="Auth-form-title">
                    Thông tin <span>đăng nhập</span>
                  </div>

                  <Form.Item name="username" rules={[validationRules.minLength(8)]}>
                    <Input placeholder="Tên đăng nhập" required={true} />
                  </Form.Item>
                  <Form.Item name="fullname" rules={[validationRules.minLength(8)]}>
                    <Input placeholder="Họ và tên" required={true} />
                  </Form.Item>
                  <Form.Item name="email" rules={[validationRules.email()]}>
                    <Input placeholder="Email cá nhân" required={true} />
                  </Form.Item>
                  <Form.Item name="mobile" rules={[validationRules.minLength(10)]}>
                    <Input placeholder="Số điện thoại cá nhân" required={true} />
                  </Form.Item>
                  <Form.Item name="avatar" rules={[validationRules.required()]}>
                    <Input placeholder="Hình ảnh cá nhân" required={true} />
                  </Form.Item>
                </div>
                <div className="Auth-form-group">
                  <div className="Auth-form-title">Mật khẩu</div>
                  <Row gutter={[32, 24]}>
                    <Col lg={{ span: 12 }} xs={{ span: 24 }}>
                      <Form.Item name="password" rules={[validationRules.minLength(8)]}>
                        <Input type="password" placeholder="Mật khẩu mới" required={true} />
                      </Form.Item>
                    </Col>
                    {/* <Col lg={{ span: 12 }} xs={{ span: 24 }}>
                      <Form.Item
                        name="passwordConfirmation"
                        // rules={[validationRules.required(), validationRules.confirmPassword(newPassword)]}
                      >
                        <Input type="password" placeholder="Nhập lại mật khẩu mới" required={true} />
                      </Form.Item>
                    </Col> */}
                    <Col span={24} />
                  </Row>
                </div>
                {/* <Form.Item name="policyAgreed">
                  <Checkbox
                    label={
                      <>
                        Tôi đã đọc và đồng ý với <a href="/privacy-private">Điều khoản và quy định</a> của OneWay 2022
                      </>
                    }
                  />
                </Form.Item> */}
                <Button title="Tạo tài khoản" size="large" loading={loginLoading} htmlType="submit" type="primary" />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
