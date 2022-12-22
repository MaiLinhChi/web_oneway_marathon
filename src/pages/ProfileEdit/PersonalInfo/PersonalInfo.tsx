import React, { useState } from 'react';
import { Col, Form, Row } from 'antd';

import UploadAvatar from '@/components/UploadAvatar';
import Button from '@/components/Button';
import Input from '@/components/Input';
import DatePicker from '@/components/DatePicker';
import Select from '@/components/Select';

import { TPersonalInfoProps } from './PersonalInfo.types';
import './PersonalInfo.scss';

const PersonalInfo: React.FC<TPersonalInfoProps> = () => {
  const [form] = Form.useForm();
  const [, setFormValues] = useState({});

  return (
    <div className="PersonalInfo">
      <Form form={form} onValuesChange={setFormValues} layout="vertical">
        <div className="PersonalInfo-header flex items-start">
          <div className="PersonalInfo-avatar">
            <Form.Item name="avatar">
              <UploadAvatar />
            </Form.Item>
          </div>
          <div className="PersonalInfo-info">
            <div className="PersonalInfo-info-title">@trxhoang</div>
            <div className="PersonalInfo-info-description">
              Bio Max 3 row (Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim)
            </div>
          </div>
          <div className="PersonalInfo-submit">
            <Button title="Lưu thay đổi" type="primary" htmlType="submit" />
          </div>
        </div>
        <UploadAvatar />

        <div className="PersonalInfo-body">
          <div className="PersonalInfo-group">
            <div className="PersonalInfo-title">
              Thông tin <span>cá nhân</span>
            </div>

            <Row gutter={[24, 24]}>
              <Col span={24}>
                <Form.Item name="fullName" label="Họ và tên">
                  <Input placeholder="Họ và tên" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="dateOfBirth" label="Ngày sinh">
                  <DatePicker placeholder="Ngày sinh" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="gender" label="Giới tính">
                  <Select
                    placeholder="Giới tính"
                    options={[
                      { label: 'Nam', value: 'male' },
                      { label: 'Nữ', value: 'female' },
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
                <Form.Item name="phoneNumber" label="Số điện thoại">
                  <Input placeholder="Số điện thoại" />
                </Form.Item>
              </Col>
            </Row>
          </div>

          <div className="PersonalInfo-group">
            <div className="PersonalInfo-title">
              Xác nhận <span>danh tính</span>
            </div>

            <Row gutter={[24, 24]}>
              <Col span={12}>
                <Form.Item name="creditNumber" label="Số CMND/Hộ chiếu">
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
                    <Form.Item name="state" label=" ">
                      <Select placeholder="Phường" />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item name="address" label=" ">
                      <Select placeholder="Số nhà/Đường" />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Form.Item name="nameEmergencyContact" label="Liên hệ khẩn cấp">
                  <Input placeholder="Tên người liên hệ khẩn cấp" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="phoneEmergencyContact" label=" ">
                  <Input placeholder="Số điện thoại người liên hệ" />
                </Form.Item>
              </Col>
            </Row>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default PersonalInfo;
