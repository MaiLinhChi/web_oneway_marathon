import React from 'react';
import './TournamentRegisterGroupConfirm.scss';
import { Col, Form, Row } from 'antd';
import TournamentRegisterInformation from '@/pages/TournamentRegisterPage/TournamentRegisterInformation';
import BackgroundRegisterPage from '@/assets/images/image-home-banner-3.png';
import { useSelector } from 'react-redux';
import { TRootState } from '@/redux/reducers';
import { validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { EIconColor } from '@/components/Icon';

const TournamentRegisterGroupConfirm: React.FC = () => {
  const registerGroup = useSelector((state: TRootState) => state.registerGroupReducer.registerGroupResponse);
  return (
    <div className="TournamentRegisterPage">
      <div className="TournamentRegisterPage-background">
        <img src={BackgroundRegisterPage} alt="" />
      </div>
      <div className="container">
        <div className="TournamentRegisterPage-wrapper">
          <h2 className="TournamentRegisterPage-title">Đăng ký tham gia OneWay Vũng Tàu 2023</h2>

          <div className="TournamentRegisterPage-main">
            <Row gutter={[24, 24]}>
              <Col span={17}>
                <div className="TournamentRegisterPage-main-success">
                  <div className="TournamentRegisterPage-main-success-header">
                    <span>Tạo nhóm thành công</span>
                  </div>
                  <div className="TournamentRegisterPage-main-success-body">
                    <h3>Tên nhóm: {registerGroup?.group.group_name}</h3>
                    <ul className="TournamentRegisterPage-main-success-body-list">
                      <li>
                        <span>Họ và tên trưởng nhóm</span>
                        <span>{registerGroup?.group.full_name}</span>
                      </li>
                      <li>
                        <span>Số điện thoại</span>
                        <span>{registerGroup?.group.phone}</span>
                      </li>
                      <li>
                        <span>Email</span>
                        <span>{registerGroup?.group.email}</span>
                      </li>
                    </ul>
                    <Form className="TournamentRegisterPage-main-success-body-form">
                      <Form.Item name="password" rules={[validationRules.required()]}>
                        <Input type="password" placeholder="Nhập mật khẩu tham gia nhóm" />
                        <Button
                          title="Tiếp tục"
                          htmlType="submit"
                          titleColor={EIconColor.WHITE}
                          borderColor={EIconColor.PERSIAN_GREEN}
                          backgroundColor={EIconColor.PERSIAN_GREEN}
                        />
                      </Form.Item>
                    </Form>
                  </div>
                </div>
              </Col>
              <Col span={7}>
                <TournamentRegisterInformation />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentRegisterGroupConfirm;
