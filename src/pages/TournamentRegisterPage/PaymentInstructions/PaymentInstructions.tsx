import React, { useEffect } from 'react';
import './PaymentInstructions.scss';
import { Col, Row } from 'antd';
import TournamentRegisterInformation from '@/pages/TournamentRegisterPage/TournamentRegisterInformation';
import BackgroundRegisterPage from '@/assets/images/image-home-banner-3.jpg';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button from '@/components/Button';
import { useSelector } from 'react-redux';
import { TRootState } from '@/redux/reducers';
import { Paths } from '@/pages/routers';
import { navigate } from '@reach/router';
import { EKeyTabTournamentRegisterPage } from '@/pages/TournamentRegisterPage/TournamentRegisterPage.enums';
import QRBank from '@/assets/images/QR-bank.png';
import CopyToClipboard from '@/components/CopyToClipboard';
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
          <h2 className="PaymentInstructions-title">Hướng dẫn hoàn tất thanh toán</h2>

          <div className="PaymentInstructions-main">
            <Row gutter={[24, 24]} className="reverse">
              <Col span={24} lg={16}>
                <div className="PaymentInstructions-main-success">
                  <div className="PaymentInstructions-main-success-body">
                    <p className="des-title">
                      Để hoàn tất quá trình thanh toán <span>(MGD: 35820564)</span>, bạn thực hiện như sau:
                    </p>
                    <div className="QR">
                      <div className="QR-content">
                        Vui lòng chuyển khoản Online cho OneWay Marathon - Cát Bà 2022 bằng 1 trong 2 phương tiện dưới
                        đây để hoàn tất giao dịch thanh toán: <br />
                        1. Nhập thông tin chuyển khoản bên dưới; hoặc  <br />
                        2. Quét mã QR Code
                      </div>
                      <img className="QR-img" src={QRBank} />
                    </div>
                    <div className="PaymentInstructions-infobank">
                      <div className="PaymentInstructions-infobank-title">Thông tin chuyển khoản</div>
                      <ul>
                        <li>
                          <span>SỐ TÀI KHOẢN</span>
                          <span>
                            <CopyToClipboard title="6696 86 8888" />
                          </span>
                        </li>
                        <li>
                          <span>TÊN CHỦ TÀI KHOẢN</span>
                          <span>CT CP ĐẦU TƯ CÔNG NGHỆ TRUYỀN THÔNG ONEBIT</span>
                        </li>
                        <li>
                          <span>NGÂN HÀNG</span>
                          <span>Ngân hàng thương mại cổ phần Á Châu (ACB) - CN TP Hồ Chí Minh</span>
                        </li>
                        <li>
                          <span>SỐ TIỀN</span>
                          <span>2.295.000 đ (Hai triệu Hai trăm Chín mươi Năm ngàn Việt Nam đồng)</span>
                        </li>
                        <li>
                          <span>NỘI DUNG CHUYỂN KHOẢN</span>
                          <span>
                            <CopyToClipboard title="35820564" />
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="PaymentInstructions-warming">
                      <div className="PaymentInstructions-warming-title">Lưu ý:</div>
                      <div className="PaymentInstructions-warming-content">
                        Sau khi hoàn tất thanh toán quá trình xử lý có thể kéo dài từ <strong>0 -24 giờ</strong>, chúng
                        tôi sẽ gửi email xác nhận sau khi nhận được thanh toán của bạn. Vui lòng giữ lại thông tin
                        chuyển khoản thành công để đối chiếu khi xảy ra sự cố. Nếu có bất kỳ thắc mắc nào bạn hãy liên
                        hệ trực tiếp đến hotline <a href="tel:+84818007898">0818.007.898</a> hoặc vui lòng liên hệ hòm
                        thư <a href="mailto:info@onewaymarathon.com">info@onewaymarathon.com</a> để được giải đáp.
                      </div>
                    </div>
                    <div className="PaymentInstructions-danger">
                      <div className="PaymentInstructions-danger-title">Lưu ý khi bạn chưa chuyển khoản:</div>
                      <div className="PaymentInstructions-danger-content">
                        Sau <strong>24 giờ</strong> nếu bạn chưa hoàn tất chuyển khoản hệ thông sẽ tự động huỷ thông tin
                        đăng ký của bạn.
                      </div>
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

export default PaymentInstructions;
