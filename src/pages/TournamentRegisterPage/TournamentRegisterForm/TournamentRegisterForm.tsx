import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'antd';

import SelectDistance from '@/components/SelectDistance';
import { showNotification, validationRules } from '@/utils/functions';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Select from '@/components/Select';
import DatePicker from '@/components/DatePicker';
import Checkbox from '@/components/Checkbox';

import { TTournamentRegisterFormProps } from './TournamentRegisterForm.types';
import './TournamentRegisterForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  ERegisterTicketAction,
  getTicketsAction,
  registerTicketAction,
  runnerRegisterGroupAction,
} from '@/redux/actions';
import { EResponseCode, ETypeNotification } from '@/common/enums';

const TournamentRegisterForm: React.FC<TTournamentRegisterFormProps> = ({ isGroup }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const registerLoading = useSelector((state: any) => state.loadingReducer[ERegisterTicketAction.REGISTER_TICKET]);
  const handleSubmit = (values: any): void => {
    const body = { ...values, ticketId: values.ticketId.value };
    if (isGroup) {
      dispatch(runnerRegisterGroupAction.request({ body }, (response): void => handleRunnerRegitserSuccess(response)));
    } else {
      dispatch(registerTicketAction.request({ body }, (response): void => handleRegitserSuccess(response)));
    }
  };
  const handleRunnerRegitserSuccess = (response: any): void => {
    if (response.status === EResponseCode.OK) {
      showNotification(ETypeNotification.SUCCESS, 'Đăng ký tạo nhóm thành công !');
    } else {
      showNotification(ETypeNotification.ERROR, response.message);
    }
  };
  const handleRegitserSuccess = (response: any): void => {
    if (response.status === EResponseCode.OK) {
      showNotification(ETypeNotification.SUCCESS, 'Đăng ký vé thành công !');
      // navigate(Paths.Home);
    } else {
      showNotification(ETypeNotification.ERROR, response.message);
    }
  };
  const [tickets, setTickets] = useState([]);
  // useEffect(() => {
  //   const body = { slug: 'cat-ba' };
  //   dispatch(getTicketsAction.request({ body }, (response): void => setTickets(response.data)));
  // });
  return (
    <div className="TournamentRegisterForm">
      <Form layout="vertical" form={form} onFinish={handleSubmit}>
        <div className="TournamentRegisterPage-card">
          <div className="TournamentRegisterPage-card-title">Chọn cự ly</div>
          <div className="TournamentRegisterPage-card-description">
            Loại vé hiện tại là <strong>Regular</strong> <a href="#">Xem bảng giá</a>{' '}
          </div>

          <Form.Item name="ticketId" rules={[validationRules.required()]}>
            <SelectDistance
              data={[
                { value: '1', label: '5', description: '420.000 VND', suffix: 'KM' },
                { value: '2', label: '10', description: '420.000 VND', suffix: 'KM' },
                { value: '3', label: '21', description: '420.000 VND', suffix: 'KM' },
                { value: '4', label: '42', description: '420.000 VND', suffix: 'KM' },
              ]}
            />
          </Form.Item>
          <div className="TournamentRegisterPage-card-title flex items-center justify-between">
            Nhập thông tin vận động viên
            <Button title="Nhập thông tin của tôi" type="text" />
          </div>

          <Row gutter={[24, 24]}>
            <Col span={12}>
              <Form.Item name="fullName" label="Họ và tên">
                <Input placeholder="Họ và tên" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="nameBIB" label="Tên trên BIB">
                <Input placeholder="Tên trên BIB" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="birthday" label="Ngày sinh">
                <DatePicker placeholder="Ngày sinh" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="gender" label="Giới tính">
                <Select
                  placeholder="Giới tính"
                  options={[
                    { label: 'Nam', value: '0' },
                    { label: 'Nữ', value: '1' },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="email" label="Email">
                <Input placeholder="Email" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="phone" label="Số điện thoại">
                <Input placeholder="Số điện thoại" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="idCard" label="Số CMND/Hộ chiếu">
                <Input placeholder="Số CMND/Hộ chiếu" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="nationality" label="Quốc tịch">
                <Select placeholder="Quốc tịch" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Row gutter={[4, 24]}>
                <Col span={6}>
                  <Form.Item name="city" label="Địa chỉ">
                    <Select placeholder="Thành phố" />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item name="province" label=" ">
                    <Select placeholder="Quận" />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item name="district" label=" ">
                    <Select placeholder="Phường" />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item name="ward" label=" ">
                    <Select placeholder="Số nhà/Đường" />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row gutter={[4, 24]}>
                <Col span={12}>
                  <Form.Item name="emergencyContactName" label="Liên hệ khẩn cấp">
                    <Input placeholder="Tên người liên hệ khẩn cấp" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="emergencyContactPhone" label=" ">
                    <Input placeholder="Số điện thoại người liên hệ" />
                  </Form.Item>
                </Col>
              </Row>
            </Col>

            <Col span={24}>
              <div
                className="TournamentRegisterPage-card-description text-right"
                style={{ fontSize: '1.4rem', position: 'relative', zIndex: 1, marginBottom: '-2rem' }}
              >
                <a href="#">Bảng kích thước</a>
              </div>
              <Form.Item name="size" label="Size áo">
                <Select placeholder="Chọn size áo" options={[]} />
              </Form.Item>
            </Col>
            {!isGroup ? (
              <>
                <Col span={24}>
                  <Form.Item name="exportBill">
                    <Checkbox label="Yêu cầu xuất hóa đơn" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="taxID">
                    <Input placeholder="Mã số thuế" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="taxNameCompany">
                    <Input placeholder="Tên công ty" />
                  </Form.Item>
                </Col>
              </>
            ) : (
              ''
            )}

            <Col span={24}>
              <Form.Item name="taxAddress">
                <Input placeholder="Địa chỉ" />
              </Form.Item>
            </Col>
            <Col span={24} />

            <Col span={24}>
              <div className="TournamentRegisterForm-submit flex justify-end">
                <Button title="Tiếp tục" type="primary" size="large" htmlType="submit" loading={registerLoading} />
              </div>
            </Col>
            <Col span={24} />
          </Row>
        </div>
      </Form>
    </div>
  );
};

export default TournamentRegisterForm;
