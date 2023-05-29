import React, { useCallback, useEffect } from 'react';
import './TournamentRegisterGroupEnd.scss';
import { Col, Row } from 'antd';
import BackgroundRegisterPage from '@/assets/images/image-home-banner-3.jpg';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button from '@/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from '@/redux/reducers';
import { navigate } from '@reach/router';
import { Paths } from '@/pages/routers';
import { registerTicketAction } from '@/redux/actions';

const TournamentRegisterGroupEnd: React.FC = () => {
  const dispatch = useDispatch();
  const registerGroup = useSelector(
    (state: TRootState) => state.registerGroupReducer.runnerRegisterGroupResponse?.data,
  );
  const ticketState = useSelector((state: TRootState) => state.registerReducer.registerTicketResponse);
  useEffect(() => {
    if (!registerGroup || !ticketState) navigate(Paths.Home);
    dispatch(registerTicketAction.save(undefined));
  }, [registerGroup, ticketState, dispatch]);
  return (
    <div className="TournamentRegisterPage">
      <div className="TournamentRegisterPage-background">
        <img src={BackgroundRegisterPage} alt="" />
      </div>
      <div className="container">
        <div className="TournamentRegisterPage-wrapper">
          <h2 className="TournamentRegisterPage-title">Đăng ký tham gia nhóm </h2>

          <div className="TournamentRegisterPage-main">
            <Row gutter={[24, 24]} className="reverse">
              <Col span={24} lg={16}>
                <div className="TournamentRegisterPage-main-success">
                  <div className="TournamentRegisterPage-main-success-header">
                    <Icon name={EIconName.CheckCircle} color="white" />
                    <span>Tạo nhóm thành công</span>
                  </div>
                  <div className="TournamentRegisterPage-main-success-body">
                    <h3>Tên nhóm: {registerGroup?.groupName}</h3>
                    <ul className="TournamentRegisterPage-main-success-body-list">
                      <li>
                        <span>Họ và tên trưởng nhóm</span>
                        <span>{registerGroup?.membership?.[0]?.fullName}</span>
                      </li>
                      <li>
                        <span>Số điện thoại</span>
                        <span>{registerGroup?.membership?.[0]?.phone}</span>
                      </li>
                      <li>
                        <span>Email</span>
                        <span>{registerGroup?.membership?.[0]?.email}</span>
                      </li>
                      <li>
                        <span>Số thành viên đã đăng ký</span>
                        <span>{registerGroup?.membership?.length}</span>
                      </li>
                    </ul>
                    <div className="TournamentRegisterPage-main-success-body-btn flex">
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
              </Col>
              <Col span={24} lg={7}>
                <div className="TournamentRegisterInformation-card sticky">
                  <div className="TournamentRegisterInformation-card-title">Thông tin cuộc đua</div>
                  <div className="TournamentRegisterInformation-card-table expand-x">
                    <table>
                      <tr>
                        <td>Họ và tên</td>
                        <td style={{ width: '100%' }}>
                          <strong>{ticketState?.fullName}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Cự ly</td>
                        <td style={{ width: '100%' }}>
                          <strong>{ticketState?.phone}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Tên trên BIB</td>
                        <td style={{ width: '100%' }}>
                          <strong>{ticketState?.nameBib}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Ngày sinh</td>
                        <td style={{ width: '100%' }}>
                          <strong>{ticketState?.phone}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Giới tính</td>
                        <td style={{ width: '100%' }}>
                          <strong>{ticketState?.gender}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td style={{ width: '100%' }}>
                          <strong>{ticketState?.email}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>SĐT</td>
                        <td style={{ width: '100%' }}>
                          <strong>{ticketState?.phone}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>CCCD</td>
                        <td style={{ width: '100%' }}>
                          <strong>{ticketState?.passport}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Size áo</td>
                        <td style={{ width: '100%' }}>
                          <strong>{ticketState?.shirtSize}</strong>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentRegisterGroupEnd;
