import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import { Link, navigate, useLocation } from '@reach/router';
import { LayoutPaths, Paths } from '@/pages/routers';
import Logo from '@/assets/images/logo.svg';
import ImageVietnamFlag from '@/assets/images/image-vietnam-flag.png';
import Button from '@/components/Button';
import Avatar from '@/components/Avatar';
import DropdownMenu from '@/components/DropdownMenu';

import { dataHeaderNav } from './Header.data';
import { THeaderProps } from './Header.types.d';
import './Header.scss';

const Header: React.FC<THeaderProps> = () => {
  const { pathname } = useLocation();

  const dataAccountMenu = [
    {
      value: 'profile',
      label: 'Trang cá nhân',
      onClick: (): void => {
        navigate(Paths.Profile);
      },
    },
    {
      value: 'edit-profile',
      label: 'Chỉnh sửa thông tin',
    },
    {
      value: 'line-1',
      label: '',
      line: true,
    },
    {
      value: 'wallet',
      label: 'Ví Onewallet',
    },
    {
      value: 'line-2',
      label: '',
      line: true,
    },
    {
      value: 'logout',
      label: 'Đăng xuất',
      danger: true,
    },
  ];

  return (
    <header className={classNames('Header')}>
      <div className="container">
        <div className="Header-wrapper flex items-center justify-between">
          <Link className="Header-logo" to={Paths.Home}>
            <img src={Logo} alt="" />
          </Link>

          <nav className="Header-nav">
            <ul className="Header-nav-list flex items-center">
              {dataHeaderNav.map((item) => (
                <li className="Header-nav-list-item">
                  {item.hash && pathname === Paths.Home ? (
                    <a href={item.hash}>{item.title}</a>
                  ) : (
                    <Link to={item.link}>{item.title}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="Header-actions flex items-center">
            <div className="Header-language">
              <img src={ImageVietnamFlag} alt="" />
            </div>
            <div className="Header-account">
              <DropdownMenu options={dataAccountMenu} minWidth="24rem" placement="bottomRight">
                <Avatar size={40} />
              </DropdownMenu>
            </div>
            <div className="Header-login">
              <Button title="Đăng nhập" type="primary" size="large" link={LayoutPaths.Auth} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
