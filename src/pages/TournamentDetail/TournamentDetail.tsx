import React from 'react';
import { Col, Row } from 'antd';

import ImageHomeBanner1 from '@/assets/images/image-home-banner-1.png';
import ImageTournamentMap1 from '@/assets/images/image-tournament-map-1.png';
import TournamentMap from '@/containers/TournamentMap';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { copyText } from '@/utils/functions';

import './TournamentDetail.scss';
import { useSelector } from 'react-redux';
import { TRootState } from '@/redux/reducers';

const TournamentDetail: React.FC = () => {
  const isMobile = useSelector((state: TRootState) => state.uiReducer.device.isMobile);
  return (
    <div className="TournamentDetail">
      <div className="container">
        <div className="TournamentDetail-wrapper">
          <div className="TournamentDetail-banner">
            <img src={ImageHomeBanner1} alt="" />
          </div>

          {!isMobile ? (
            <div className="TournamentDetail-status flex">
              {/* <div className="TournamentDetail-status-item cancel">Đã huỷ</div> */}
              <div className="TournamentDetail-status-item pending">Chờ thanh toán</div>
              {/* <div className="TournamentDetail-status-item success">Đã thanh toán</div> */}
            </div>
          ) : (
            ''
          )}

          <div className="TournamentDetail-main">
            <Row gutter={{ xs: 0, lg: 48 }}>
              <Col xs={{ order: 2, span: 24 }} lg={{ order: 1, span: 16 }}>
                <h1 className="TournamentDetail-title">
                  OneWay
                  <span>Cát Bà 2022</span>
                </h1>
                <p className="TournamentDetail-description">
                  OneWay là giải chạy marathon được tổ chức thường xuyên bởi Tạp chí Điện tử Doanh nhân trẻ, Đài Tiếng
                  nói Việt Nam và Hội Nhà báo Việt Nam nhằm nâng cao sức khỏe thể chất và tinh thần thi đấu với mong
                  muốn tạo động lực cho mọi người vượt qua giới hạn của bản thân.Giải chạy OneWay Cát Bà 2022 được tổ
                  chức tại đảo Cát Bà, huyện Cát Hải, thành phố Hải Phòng. Đến với cuộc thi, các vận động viên không chỉ
                  được rèn luyện sức khỏe mà còn mà còn có cơ hội... <a href="#">Xem chi tiết giải</a>
                </p>

                <h2 className="TournamentDetail-subtitle">Thông tin chi tiết</h2>
                <div className="TournamentDetail-table striped race">
                  <table>
                    <tbody>
                      <tr>
                        <td>Ngày đua</td>
                        <td>
                          <strong>10/12/2022</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Địa điểm</td>
                        <td>
                          <strong>Cát Bà-Hải Phòng</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Loại hình</td>
                        <td>
                          <strong>Road/City trail</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Cự ly</td>
                        <td>
                          <strong>5km, 10km, 21km</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <TournamentMap color={EIconColor.BLUE_RIBBON} title="OneWay Cát Bà" stepKilometer={[]} />

                <h2 className="TournamentDetail-subtitle">Nhóm đã tạo</h2>
                <div className="TournamentDetail-card">
                  <div className="TournamentDetail-card-edit flex justify-end">
                    <Button title="Chỉnh sửa" type="ghost" />
                  </div>
                  <h3 className="TournamentDetail-card-title">Tên nhóm: Only tiger</h3>
                  <div className="TournamentDetail-table">
                    <table>
                      <tbody>
                        <tr>
                          <td>Họ và tên trưởng nhóm</td>
                          <td style={{ width: '100%' }}>
                            <strong>Trần Xuân Hoàng</strong>
                          </td>
                        </tr>

                        <tr>
                          <td>Số điện thoại</td>
                          <td style={{ width: '100%' }}>
                            <strong>0798407797</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td style={{ width: '100%' }}>
                            <strong>thkl.8996@gmail.com</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h3 className="TournamentDetail-card-title">Link đăng ký nhóm</h3>
                  <div className="TournamentDetail-card-link">
                    <div className="TournamentDetail-card-link-url flex">
                      <Input readOnly value="https://onewaymarathon.com/hue-2023/vm/8989" />
                      <Button
                        title="Sao chép"
                        type="primary"
                        onClick={(): void => copyText('https://onewaymarathon.com/hue-2023/vm/8989')}
                      />
                    </div>
                    <div className="TournamentDetail-card-link-description">
                      <p>Hướng dẫn: Để đăng ký theo nhóm (từ 2 người) bạn cần làm theo các bước sau:</p>
                      <ul>
                        <li>Bước 1: Chia sẻ “link đăng ký nhóm” bên trên cho bạn bè.</li>
                        <li>Bước 2: Các vận động viên truy cập link và điền thông tin cần thiết.</li>
                        <li>Bước 3: Trưởng nhóm hoàn tất đăng ký và tiến hành thanh toán.</li>
                      </ul>
                    </div>
                  </div>
                  <h3 className="TournamentDetail-card-title">Thông tin thành viên</h3>
                  <div className="TournamentDetail-table">
                    <table>
                      <thead>
                        <tr>
                          <td style={{ width: 24 }} />
                          <td>
                            <strong>STT</strong>
                          </td>
                          <td>
                            <strong>Họ và tên</strong>
                          </td>
                          <td>
                            <strong>Cự ly</strong>
                          </td>
                          <td>
                            <strong>Thời gian đăng ký</strong>
                          </td>
                          <td className="text-right">
                            <strong>Giá tiền</strong>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        {[1, 2, 3, 4, 5].map((item) => (
                          <tr>
                            <td style={{ width: 24 }}>
                              <Icon name={EIconName.MinusCircle} color={EIconColor.RED_ORANGE} />
                            </td>
                            <td>{item}</td>
                            <td>Trần Xuân Hoàng</td>
                            <td>5km</td>
                            <td>12/1/2023</td>
                            <td className="text-right">515.000 VNĐ</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="TournamentDetail-card-total text-right">
                    Tổng cộng: <strong>1.000.000 VNĐ</strong>
                  </div>
                  <div className="TournamentDetail-card-actions flex items-center justify-between">
                    <Button title="Xoá nhóm" type="text" size="large" />
                    <Button title="Thanh toán" type="primary" size="large" />
                  </div>
                </div>
              </Col>
              <Col xs={{ order: 1, span: 24 }} lg={{ order: 2, span: 8 }}>
                <div className="TournamentDetail-ticket">
                  <h2 className="TournamentDetail-subtitle">Vé của bạn:</h2>
                  <div className="TournamentDetail-table expand-x">
                    <table>
                      <tbody>
                        <tr>
                          <td>Họ và tên</td>
                          <td style={{ width: '100%' }}>
                            <strong>Trần Xuân Hoàng</strong>
                          </td>
                        </tr>

                        <tr>
                          <td>Cự ly</td>
                          <td style={{ width: '100%' }}>
                            <strong>5km</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>Số BIB</td>
                          <td style={{ width: '100%' }}>
                            <strong>927462</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>Mã đăng ký</td>
                          <td style={{ width: '100%' }}>
                            <div className="flex items-center" style={{ columnGap: '1.6rem' }}>
                              <strong style={{ color: EIconColor.BLUE_RIBBON }}>K238FJAW</strong>
                              <Icon name={EIconName.Copy} onClick={(): void => copyText('K238FJAW')} />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {isMobile ? (
                  <div className="TournamentDetail-status flex">
                    {/* <div className="TournamentDetail-status-item cancel">Đã huỷ</div> */}
                    <div className="TournamentDetail-status-item pending">Chờ thanh toán</div>
                    {/* <div className="TournamentDetail-status-item success">Đã thanh toán</div> */}
                  </div>
                ) : (
                  ''
                )}
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentDetail;
