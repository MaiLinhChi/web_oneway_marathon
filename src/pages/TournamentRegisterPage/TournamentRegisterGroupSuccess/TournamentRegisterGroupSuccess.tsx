import React, { useCallback, useEffect, useState } from 'react';
import './TournamentRegisterGroupSuccess.scss';
import { Col, Row } from 'antd';
import TournamentRegisterInformation from '@/pages/TournamentRegisterPage/TournamentRegisterInformation';
import BackgroundRegisterPage from '@/assets/images/image-home-banner-3.jpg';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button from '@/components/Button';
import { Paths } from '@/pages/routers';
import { navigate, useParams } from '@reach/router';
import { EKeyTabTournamentRegisterPage } from '@/pages/TournamentRegisterPage/TournamentRegisterPage.enums';
import AuthHelpers from '@/services/helpers';
import { getGroupById } from '@/services/registers/register-group/get-group-by-id';
import { copyText } from '@/utils/functions';

const TournamentRegisterGroupSuccess: React.FC = () => {
  const [group, setGroup] = useState<any>({});
  const atk = AuthHelpers.getAccessToken();
  const { id } = useParams();
  const handlerClick = (): void => {
    // navigate(Paths.TournamentRegisterGroupConfirm(group?.group.slug));
  };
  const getInfoGroup = useCallback(async () => {
    const res = await getGroupById({ id });
    setGroup(res.data);
  }, [id]);
  useEffect(() => {
    getInfoGroup();
  }, [id, getInfoGroup]);
  return (
    <div className="TournamentRegisterPage">
      <div className="TournamentRegisterPage-background">
        <img src={BackgroundRegisterPage} alt="" />
      </div>
      <div className="container">
        <div className="TournamentRegisterPage-wrapper">
          <h2 className="TournamentRegisterPage-title">Đăng ký tham gia OneWay {group.marathonName}</h2>
          <div className="TournamentRegisterPage-main">
            <Row gutter={[24, 24]} className="reverse">
              <Col span={24} lg={16}>
                <div className="TournamentRegisterPage-main-success">
                  <div className="TournamentRegisterPage-main-success-header">
                    <Icon name={EIconName.CheckCircle} color="white" />
                    <span>Tạo nhóm thành công</span>
                  </div>
                  <div className="TournamentRegisterPage-main-success-body">
                    <h3>Tên nhóm: {group?.groupName}</h3>
                    <ul className="TournamentRegisterPage-main-success-body-list">
                      <li>
                        <span>Họ và tên trưởng nhóm</span>
                        <span>{group?.membership?.[0]?.fullName}</span>
                      </li>
                      <li>
                        <span>Số điện thoại</span>
                        <span>{group?.membership?.[0]?.phone}</span>
                      </li>
                      <li>
                        <span>Email</span>
                        <span>{group?.membership?.[0]?.email}</span>
                      </li>
                    </ul>
                    <h3>Link đăng ký nhóm</h3>
                    <div className="TournamentRegisterPage-main-success-body-copy">
                      <div className="TournamentRegisterPage-main-success-body-copy-top flex items-center justify-between">
                        <div className="link" onClick={handlerClick}>
                          {group?.linkJoin}
                        </div>
                        <Button title="Sao chép" type="primary" onClick={(): void => copyText(group?.linkJoin)} />
                      </div>
                      <div className="TournamentRegisterPage-main-success-body-copy-bottom">
                        Hướng dẫn: Để đăng ký theo nhóm (từ 2 người) bạn cần làm theo các bước sau: Bước 1: Chia sẻ
                        “link đăng ký nhóm” bên trên cho bạn bè. Bước 2: Các vận động viên truy cập link và điền thông
                        tin cần thiết. Bước 3: Trưởng nhóm hoàn tất đăng ký và tiến hành thanh toán.
                      </div>
                    </div>
                    <div className="TournamentRegisterPage-main-success-body-btn flex">
                      <Button
                        size="large"
                        title="Về trang chủ"
                        titleColor={EIconColor.BLACK}
                        borderColor={EIconColor.BG}
                        backgroundColor={EIconColor.BG}
                        link={Paths.Home}
                      />
                      <Button
                        size="large"
                        title="Quản lý giải"
                        titleColor={EIconColor.WHITE}
                        borderColor={EIconColor.PERSIAN_GREEN}
                        backgroundColor={EIconColor.PERSIAN_GREEN}
                        link={Paths.Profile}
                      />
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={24} lg={7}>
                <TournamentRegisterInformation group={{ location: group.marathonName, startTime: group.startTime }} />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentRegisterGroupSuccess;
