import React from 'react';

import { TAuthProps } from '@/layouts/Auth/Auth.types';
import Header from '@/containers/Header';
import Footer from '@/containers/Footer';
import { LayoutPaths, Paths } from '@/pages/routers';

import './Auth.scss';

const Auth: React.FC<TAuthProps> = ({ children }) => {
  return (
    <div className="Auth">
      <div className="Auth-header">
        <Header />
      </div>
      <div className="Auth-body" style={{ 'paddingBottom': Paths.Register ? 0 : '' }}>
        <div className="Auth-background" />
        {children}
      </div>
      <div className="Auth-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Auth;
