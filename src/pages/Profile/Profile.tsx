import React, { useState } from 'react';
import { Col, Row } from 'antd';

import TabRectangle, { TTabRectangleValue } from '@/components/TabRectangle';
import UploadAvatar from '@/components/UploadAvatar';
import ProfileCard from '@/pages/Profile/ProfileCard';
import Tournaments from '@/pages/Profile/Tournaments';
import Achievements from '@/pages/Profile/Achievements';
import Button from '@/components/Button';

import { ETabProfileKey } from './Profile.enums';
import './Profile.scss';
import { TRootState } from '@/redux/reducers';
import { useSelector } from 'react-redux';

const Profile: React.FC = () => {
  const dataTabProfile = [
    {
      value: ETabProfileKey.TOURNAMENT,
      label: 'Quản lý giải',
    },
    {
      value: ETabProfileKey.ACHIEVEMENTS,
      label: 'Thành tích',
    },
  ];

  const [activeTab, setActiveTab] = useState<TTabRectangleValue>(dataTabProfile[0]);
  const isMobile = useSelector((state: TRootState) => state.uiReducer.device.isMobile);
  return (
    <div className="Profile">
      <div className="Profile-background">
        <UploadAvatar
          overlay={
            <div className="Profile-background-overlay">
              <Row gutter={[48, 48]}>
                {!isMobile ? <Col lg={{ span: 8 }} xs={{ span: 24 }} /> : ''}
                <Col lg={{ span: 16 }} xs={{ span: 24 }}>
                  <div className="Profile-background-overlay-btns flex items-center justify-center">
                    <Button title="Đổi ảnh bìa" type="primary" />
                    <div onClick={(e): void => e.stopPropagation()}>
                      <Button title="Xoá ảnh bìa" type="ghost" />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          }
        />
      </div>
      <div className="container">
        <div className="Profile-wrapper">
          <Row gutter={{ xs: 0, lg: 48 }}>
            <Col lg={{ span: 8 }} xs={{ span: 24 }}>
              <ProfileCard />
            </Col>
            <Col lg={{ span: 16 }} xs={{ span: 24 }}>
              <TabRectangle value={activeTab} onChange={setActiveTab} options={dataTabProfile} />

              {activeTab.value === ETabProfileKey.TOURNAMENT && <Tournaments />}
              {activeTab.value === ETabProfileKey.ACHIEVEMENTS && <Achievements />}
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Profile;
