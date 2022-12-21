import React from 'react';

import { TAuthProps } from '@/layouts/Auth/Auth.types';
import Header from '@/containers/Header';
import Footer from '@/containers/Footer';

import './Auth.scss';

const Auth: React.FC<TAuthProps> = ({ children }) => {
  return (
    <div className="Auth">
      <div className="Auth-header">
        <Header />
      </div>
      <div className="Auth-body">
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
