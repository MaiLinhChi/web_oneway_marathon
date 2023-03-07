import React from 'react';

import Avatar from '@/components/Avatar';
import { Col, Row } from 'antd';
import Button from '@/components/Button';

import { TProfileCardProps } from './ProfileCard.types';
import './ProfileCard.scss';
import { Paths } from '@/pages/routers';

const ProfileCard: React.FC<TProfileCardProps> = ({ name, email, avatar }) => {
  return (
    <div className="ProfileCard">
      <div className="ProfileCard-avatar flex justify-center">
        <Avatar image={'https://api-dev.onewaymarathon.com' + avatar} size={112} />
      </div>
      <div className="ProfileCard-title">{name}</div>
      <div className="ProfileCard-description">{email}</div>
      <div className="ProfileCard-btns">
        <Row gutter={[24, 24]}>
          <Col span={12}>
            <Button title="Chỉnh sửa" type="primary" link={Paths.ProfileEdit} />
          </Col>
          <Col span={12}>
            <Button title="Chia sẻ" type="text" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProfileCard;
