import React, { useEffect } from 'react';
import './PaymentInstructions.scss';
import { Col, Row } from 'antd';
import TournamentRegisterInformation from '@/pages/TournamentRegisterPage/TournamentRegisterInformation';
import BackgroundRegisterPage from '@/assets/images/image-home-banner-3.png';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button from '@/components/Button';
import { useSelector } from 'react-redux';
import { TRootState } from '@/redux/reducers';
import { Paths } from '@/pages/routers';
import { navigate } from '@reach/router';
import { EKeyTabTournamentRegisterPage } from '@/pages/TournamentRegisterPage/TournamentRegisterPage.enums';

const PaymentInstructions: React.FC = () => {
  const registerGroup = useSelector((state: TRootState) => state.registerGroupReducer.registerGroupResponse);
  const handlerClick = (): void => {
    navigate(Paths.TournamentRegisterGroupConfirm(registerGroup?.group.slug));
  };
  // useEffect(() => {
  //   if (!registerGroup) navigate(`${Paths.TournamentRegister}?tab=${EKeyTabTournamentRegisterPage.MULTIPLE}`);
  // }, [registerGroup]);
  return (
    <div className="PaymentInstructions">
      <div className="PaymentInstructions-background">
        <img src={BackgroundRegisterPage} alt="" />
      </div>
      <div className="container">
        <div className="PaymentInstructions-wrapper">
          <h2 className="PaymentInstructions-title">Đăng ký tham gia OneWay Vũng Tàu 2023</h2>

          <div className="PaymentInstructions-main">
            <Row gutter={[24, 24]}>
              <Col span={17}>
                <div className="PaymentInstructions-main-success">
                  <div className="PaymentInstructions-main-success-body">
                    <p>Để hoàn tất quá trình thanh toán (MGD: 35820564), bạn thực hiện như sau:</p>
                    <div className="QR">
                      <div className="QR-content">
                        Vui lòng chuyển khoản Online cho OneWay Marathon - Cát Bà 2022 bằng 1 trong 2 phương tiện dưới
                        đây để hoàn tất giao dịch thanh toán:  1. Nhập thông tin chuyển khoản bên dưới; hoặc  2. Quét mã
                        QR Code
                      </div>
                      <div className="QR-img" />
                    </div>
                    <div className="PaymentInstructions-infobank">
                      <ul>
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                      </ul>
                    </div>
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

export default PaymentInstructions;
