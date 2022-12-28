import React, { useState } from 'react';
import { Col, Form, Row } from 'antd';

import UploadAvatar from '@/components/UploadAvatar';
import Button from '@/components/Button';
import Input from '@/components/Input';
import DatePicker from '@/components/DatePicker';
import Select from '@/components/Select';

import { TPersonalInfoProps } from './PersonalInfo.types';
import './PersonalInfo.scss';
import { useSelector } from 'react-redux';
import { TRootState } from '@/redux/reducers';

const PersonalInfo: React.FC<TPersonalInfoProps> = () => {
  const [form] = Form.useForm();
  const [, setFormValues] = useState({});
  const isMobile = useSelector((state: TRootState) => state.uiReducer.device.isMobile);
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
              <Col lg={{ span: 24 }} xs={{ span: 24 }}>
                <Form.Item name="fullName" label="Họ và tên">
                  <Input placeholder="Họ và tên" />
                </Form.Item>
              </Col>
              <Col lg={{ span: 12 }} xs={{ span: 24 }}>
                <Form.Item name="dateOfBirth" label="Ngày sinh">
                  <DatePicker placeholder="Ngày sinh" />
                </Form.Item>
              </Col>
              <Col lg={{ span: 12 }} xs={{ span: 24 }}>
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
              <Col lg={{ span: 12 }} xs={{ span: 24 }}>
                <Form.Item name="email" label="Email">
                  <Input placeholder="Email" />
                </Form.Item>
              </Col>
              <Col lg={{ span: 12 }} xs={{ span: 24 }}>
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
              <Col lg={{ span: 12 }} xs={{ span: 24 }}>
                <Form.Item name="creditNumber" label="Số CMND/Hộ chiếu">
                  <Input placeholder="Số CMND/Hộ chiếu" />
                </Form.Item>
              </Col>
              <Col lg={{ span: 12 }} xs={{ span: 24 }}>
                <Form.Item name="nationality" label="Quốc tịch">
                  <Select placeholder="Quốc tịch" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Row gutter={[4, 24]}>
                  <Col lg={{ span: 6 }} md={{ span: 24 }} xs={{ span: 24 }}>
                    <Form.Item name="city" label="Địa chỉ">
                      <Select placeholder="Thành phố" />
                    </Form.Item>
                  </Col>
                  {!isMobile ? (
                    <>
                      <Col lg={{ span: 6 }} md={{ span: 6 }} xs={{ span: 24 }}>
                        <Form.Item name="province" label=" ">
                          <Select placeholder="Quận" />
                        </Form.Item>
                      </Col>
                      <Col lg={{ span: 6 }} md={{ span: 6 }} xs={{ span: 24 }}>
                        <Form.Item name="state" label=" ">
                          <Select placeholder="Phường" />
                        </Form.Item>
                      </Col>
                      <Col lg={{ span: 6 }} md={{ span: 6 }} xs={{ span: 24 }}>
                        <Form.Item name="address" label=" ">
                          <Select placeholder="Số nhà/Đường" />
                        </Form.Item>
                      </Col>
                    </>
                  ) : (
                    <>
                      <Col lg={{ span: 6 }} md={{ span: 12 }} xs={{ span: 24 }}>
                        <Form.Item name="province">
                          <Select placeholder="Quận" />
                        </Form.Item>
                      </Col>
                      <Col lg={{ span: 6 }} md={{ span: 12 }} xs={{ span: 24 }}>
                        <Form.Item name="state">
                          <Select placeholder="Phường" />
                        </Form.Item>
                      </Col>
                      <Col lg={{ span: 6 }} md={{ span: 12 }} xs={{ span: 24 }}>
                        <Form.Item name="address">
                          <Select placeholder="Số nhà/Đường" />
                        </Form.Item>
                      </Col>
                    </>
                  )}
                </Row>
              </Col>
              <Col span={24}>
                <Row gutter={[4, 24]}>
                  <Col lg={{ span: 12 }} md={{ span: 12 }} xs={{ span: 24 }}>
                    <Form.Item name="nameEmergencyContact" label="Liên hệ khẩn cấp">
                      <Input placeholder="Tên người liên hệ khẩn cấp" />
                    </Form.Item>
                  </Col>
                  <Col lg={{ span: 12 }} md={{ span: 12 }} xs={{ span: 24 }}>
                    <Form.Item name="phoneEmergencyContact" label="Người liên hệ ">
                      <Input placeholder="Số điện thoại người liên hệ" />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default PersonalInfo;
