import React, { useState } from 'react';
import { Col, Row } from 'antd';

import TabRectangle, { TTabRectangleValue } from '@/components/TabRectangle';
import UploadAvatar from '@/components/UploadAvatar';
import ProfileCard from '@/pages/Profile/ProfileCard';
import Tournaments from '@/pages/Profile/Tournaments';
import Achievements from '@/pages/Profile/Achievements';

import { ETabProfileKey } from './Profile.enums';
import './Profile.scss';
import Button from '@/components/Button';

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

  return (
    <div className="Profile">
      <div className="Profile-background">
        <UploadAvatar
          overlay={
            <div className="Profile-background-overlay">
              <Row gutter={[48, 48]}>
                <Col span={8} />
                <Col span={16}>
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
          <Row gutter={[48, 48]}>
            <Col span={8}>
              <ProfileCard />
            </Col>
            <Col span={16}>
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
