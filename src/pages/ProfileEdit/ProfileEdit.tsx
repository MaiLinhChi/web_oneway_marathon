import React, { useState } from 'react';
import { Col, Row } from 'antd';

import TabRectangle, { ETabRectangleStyleType, TTabRectangleValue } from '@/components/TabRectangle';
import ChangePassword from '@/pages/ProfileEdit/ChangePassword';
import PersonalInfo from '@/pages/ProfileEdit/PersonalInfo/PersonalInfo';

import { ETabProfileEditKey } from './ProfileEdit.enums';
import './ProfileEdit.scss';

const ProfileEdit: React.FC = () => {
  const dataTabProfileEdit = [
    {
      value: ETabProfileEditKey.PERSONAL_INFO,
      label: 'Thông tin cá nhân',
    },
    {
      value: ETabProfileEditKey.CHANGE_PASSWORD,
      label: 'Đổi mật khẩu',
    },
  ];

  const [activeTab, setActiveTab] = useState<TTabRectangleValue>(dataTabProfileEdit[0]);

  return (
    <div className="ProfileEdit">
      <div className="container">
        <div className="ProfileEdit-wrapper">
          <Row wrap={false}>
            <Col>
              <div className="ProfileEdit-sidebar">
                <TabRectangle
                  value={activeTab}
                  options={dataTabProfileEdit}
                  onChange={setActiveTab}
                  styleType={ETabRectangleStyleType.VERTICAL}
                />
              </div>
            </Col>
            <Col flex={1}>
              <div className="ProfileEdit-main">
                {activeTab.value === ETabProfileEditKey.PERSONAL_INFO && <PersonalInfo />}
                {activeTab.value === ETabProfileEditKey.CHANGE_PASSWORD && <ChangePassword />}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
