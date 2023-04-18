import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import TournamentRegisterInformation from '@/pages/TournamentRegisterPage/TournamentRegisterInformation';
import BackgroundRegisterPage from '@/assets/images/image-home-banner-3.jpg';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button from '@/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from '@/redux/reducers';
import { Paths } from '@/pages/routers';
import { navigate, useLocation } from '@reach/router';
import { getPaymentSuccessAction } from '@/redux/actions';
import './TournamentPaymentSuccess.scss';
import { log } from 'console';
const TournamentPaymentSucces: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [status, setStatus] = useState('');
  const orderState = useSelector((state: TRootState) => state.orderDetailReducer.getOrderDetailResponse);
  useEffect(() => {
    const query = location.search;
    // dispatch(getPaymentSuccessAction.request({ body }, (response): void => handleFieldData(response)));
  }, [location, dispatch]);
  const handleFieldData = (data: any): void => {
    console.log(data);
  };
  return (
    <div className="TournamentPaymentSucces">
      <div className="TournamentPaymentSucces-background">
        <img src={BackgroundRegisterPage} alt="" />
      </div>
      <div className="container">
        <div className="TournamentPaymentSucces-wrapper">
          <h2 className="TournamentPaymentSucces-title">Thanh toán</h2>

          <div className="TournamentPaymentSucces-main">
            <Row gutter={[24, 24]} className="reverse">
              <Col span={24} lg={16}>
                {true ? (
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
                          link={Paths.Home}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="TournamentPaymentSucces-main-success fail">
                    <div className="TournamentPaymentSucces-main-success-header">
                      <span>Có lỗi xảy ra</span>
                    </div>
                    <div className="TournamentPaymentSucces-main-success-body">
                      <p>
                        Có thể do bạn chưa hoàn tất quá trình thanh toán. Nếu có bất kỳ thắc mắc nào bạn hãy liên hệ
                        trực tiếp đến hotline <a href="tel:+84818007898">0818.007.898</a> hoặc vui lòng liên hệ hòm thư{' '}
                        <a href="mailto:info@onewaymarathon.com">info@onewaymarathon.com</a> để được giải đáp.
                      </p>
                      <div className="TournamentPaymentSucces-main-success-body-btn flex">
                        <Button
                          size="large"
                          title="Về trang chủ"
                          titleColor={EIconColor.WHITE}
                          borderColor={EIconColor.PERSIAN_GREEN}
                          backgroundColor={EIconColor.PERSIAN_GREEN}
                          link={Paths.Home}
                        />
                      </div>
                    </div>
                  </div>
                )}
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
