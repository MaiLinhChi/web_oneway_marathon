import React from 'react';

import { TAdminProps } from '@/layouts/Admin/Admin.types';

const Admin: React.FC<TAdminProps> = ({ children }) => {
  return <div className="Admin">{children}</div>;
};

export default Admin;
