import React, { useState } from 'react';
import { Form } from 'antd';

import { TPersonalInfoProps } from './PersonalInfo.types';
import './PersonalInfo.scss';

const PersonalInfo: React.FC<TPersonalInfoProps> = () => {
  const [form] = Form.useForm();
  const [, setFormValues] = useState({});

  return (
    <div className="PersonalInfo">
      <Form form={form} onValuesChange={setFormValues} />
    </div>
  );
};

export default PersonalInfo;
