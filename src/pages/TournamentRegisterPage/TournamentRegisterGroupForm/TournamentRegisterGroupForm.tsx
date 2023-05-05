import React from 'react';
import { Col, Form, Row } from 'antd';

import SelectDistance from '@/components/SelectDistance';
import { showNotification, validationRules } from '@/utils/functions';
import Button from '@/components/Button';
import Input from '@/components/Input';

import { TTournamentRegisterGroupFormProps } from './TournamentRegisterGroupForm.types';
import './TournamentRegisterGroupForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import { ERegisterGroupAction, registerGroupAction } from '@/redux/actions';
import { EResponseCode, ETypeNotification } from '@/common/enums';
import { navigate } from '@reach/router';
import { LayoutPaths, Paths } from '@/pages/routers';
import AuthHelpers from '@/services/helpers';

const TournamentRegisterGroupForm: React.FC<TTournamentRegisterGroupFormProps> = ({ data }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const atk = AuthHelpers.getAccessToken();
  const registerLoading = useSelector((state: any) => state.loadingReducer[ERegisterGroupAction.REGISTER_GROUP]);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleSubmit = (values: any): void => {
    const body = { ...values };
    dispatch(registerGroupAction.request({ body }, (response): void => handleRegitserSuccess(response)));
  };
  const handleRegitserSuccess = (response: any): void => {
    if (response.status === EResponseCode.OK) {
      showNotification(ETypeNotification.SUCCESS, 'Đăng ký nhóm thành công !');
      navigate(Paths.TournamentRegisterGroupSuccess);
    } else {
      showNotification(ETypeNotification.ERROR, response.message);
    }
  };
  console.log(atk);
  if (!atk) {
    navigate(LayoutPaths.Auth + Paths.Login);
  }
  return (
    <div className="TournamentRegisterGroupForm">
      <Form layout="vertical" form={form} onFinish={handleSubmit}>
        <div className="TournamentRegisterPage-card">
          <div className="TournamentRegisterGroupForm-description">
            <p>Hướng dẫn: Để đăng ký theo nhóm (từ 2 người) bạn cần làm theo các bước sau:</p>
            <ul>
              <li>Bước 1: Tạo link “đăng ký nhóm” và chia sẻ cho bạn bè.</li>
            </ul>
            <ul>
              <li>Bước 2: Các vận động viên truy cập link và điền thông tin cần thiết.</li>
            </ul>
            <ul>
              <li>Bước 3: Trưởng nhóm hoàn tất đăng ký và tiến hành thanh toán.</li>
            </ul>
          </div>

          <div className="TournamentRegisterGroupForm-group">
            <div className="TournamentRegisterPage-card-title">Lựa chọn số lượng thành viên</div>

            <Form.Item name="percent" rules={[validationRules.required()]}>
              <SelectDistance multiple={data.registerGroup} />
            </Form.Item>
          </div>

          <div className="TournamentRegisterGroupForm-group">
            <div className="TournamentRegisterPage-card-title">Thông tin nhóm</div>
            <Row gutter={[16, 16]} align="middle">
              <Col span={6}>
                <div className="ant-form-item-label">
                  <label>Tên nhóm</label>
                </div>
              </Col>
              <Col span={18}>
                <Form.Item name="name">
                  <Input placeholder="Tên nhóm" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <div className="ant-form-item-label">
                  <label>Mật khẩu</label>
                </div>
              </Col>
              <Col span={18}>
                <Form.Item name="password">
                  <Input type="password" placeholder="Mật khẩu" />
                </Form.Item>
              </Col>
            </Row>
          </div>

          <div className="TournamentRegisterGroupForm-group">
            <div className="TournamentRegisterPage-card-title">Nhập thông tin trưởng nhóm</div>
            <Row gutter={[16, 16]} align="middle">
              <Col span={6}>
                <div className="ant-form-item-label">
                  <label>Họ và tên</label>
                </div>
              </Col>
              <Col span={18}>
                <Form.Item name="fullName">
                  <Input placeholder="Họ và tên" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <div className="ant-form-item-label">
                  <label>Điện thoại</label>
                </div>
              </Col>
              <Col span={18}>
                <Form.Item name="phone">
                  <Input placeholder="Điện thoại" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <div className="ant-form-item-label">
                  <label>Email</label>
                </div>
              </Col>
              <Col span={18}>
                <Form.Item name="email">
                  <Input placeholder="Email" />
                </Form.Item>
              </Col>
            </Row>
          </div>
          <div className="TournamentRegisterGroupForm-submit flex justify-end">
            <Button title="Xác nhận" type="primary" size="large" htmlType="submit" loading={registerLoading} />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default TournamentRegisterGroupForm;
