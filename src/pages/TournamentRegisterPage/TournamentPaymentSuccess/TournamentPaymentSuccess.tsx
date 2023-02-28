import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import TournamentRegisterInformation from '@/pages/TournamentRegisterPage/TournamentRegisterInformation';
import BackgroundRegisterPage from '@/assets/images/image-home-banner-3.jpg';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button from '@/components/Button';
import { useSelector } from 'react-redux';
import { TRootState } from '@/redux/reducers';
import { Paths } from '@/pages/routers';
import { navigate } from '@reach/router';
import './TournamentPaymentSuccess.scss';
const TournamentPaymentSucces: React.FC = () => {
  const registerGroup = useSelector((state: TRootState) => state.registerGroupReducer.registerGroupResponse);
  const handlerClick = (): void => {
    navigate(Paths.TournamentRegisterGroupConfirm(registerGroup?.group.slug));
  };
  // useEffect(() => {
  //   if (!registerGroup) navigate(`${Paths.TournamentRegister}?tab=${EKeyTabTournamentRegisterPage.MULTIPLE}`);
  // }, [registerGroup]);
  return (
    <div className="TournamentPaymentSucces">
      <div className="TournamentPaymentSucces-background">
        <img src={BackgroundRegisterPage} alt="" />
      </div>
      <div className="container">
        <div className="TournamentPaymentSucces-wrapper">
          <h2 className="TournamentPaymentSucces-title">Đăng ký tham gia OneWay Vũng Tàu 2023</h2>

          <div className="TournamentPaymentSucces-main">
            <Row gutter={[24, 24]} className="reverse">
              <Col span={24} lg={16}>
                <div className="TournamentPaymentSucces-main-success">
                  <div className="TournamentPaymentSucces-main-success-header">
                    <Icon name={EIconName.CheckCircle} color="white" />
                    <span>Chúc mừng bạn đã đăng ký thành công!</span>
                  </div>
                  <div className="TournamentPaymentSucces-main-success-body">
                    <p>
                      Thông tin đăng ký đã được gửi cho bạn qua email của bạn. Vui lòng check email để nhận thông tin
                      của bạn tại giải chạy .
                    </p>
                    <div className="TournamentPaymentSucces-main-success-body-btn flex">
                      <Button
                        size="large"
                        title="Về trang chủ"
                        titleColor={EIconColor.WHITE}
                        borderColor={EIconColor.PERSIAN_GREEN}
                        backgroundColor={EIconColor.PERSIAN_GREEN}
                      />
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={24} lg={7}>
                <TournamentRegisterInformation />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentPaymentSucces;
