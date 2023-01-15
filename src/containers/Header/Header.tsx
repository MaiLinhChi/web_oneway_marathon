import React, { useCallback, useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from '@/redux/reducers';
import Icon, { EIconName } from '@/components/Icon';
import AuthHelpers from '@/services/helpers';
import { authLogoutAction, getProfileAction } from '@/redux/actions';
import { showNotification } from '@/utils/functions';
import { ETypeNotification } from '@/common/enums';

const Header: React.FC<THeaderProps> = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isMobile = useSelector((state: TRootState) => state.uiReducer.device.isMobile);
  const atk = AuthHelpers.getAccessToken();
  const handleLogout = (): void => {
    dispatch(authLogoutAction.request({}, handleAuthLogoutSuccess));
  };

  const handleAuthLogoutSuccess = (): void => {
    AuthHelpers.clearTokens();
    dispatch(getProfileAction.success(undefined));
    showNotification(ETypeNotification.SUCCESS, 'Đăng xuất tài khoản thành công !');
    navigate(Paths.Home);
  };
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
      onClick: (): void => {
        navigate(Paths.ProfileEdit);
      },
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
      onClick: (): void => {
        handleLogout();
      },
    },
  ];
  const getProfile = useCallback(() => {
    if (atk) dispatch(getProfileAction.request({}));
  }, [dispatch, atk]);
  const profileState = useSelector((state: TRootState) => state.profileReducer.getProfileResponse?.data);
  useEffect(() => {
    getProfile();
  }, [getProfile]);
  return (
    <header className={classNames('Header')}>
      <div className="container">
        <div className="Header-wrapper flex items-center justify-between">
          {isMobile ? (
            <>
              <div className="Header-wrapper-toggle">
                <Icon name={EIconName.Bars} />
              </div>
            </>
          ) : (
            ''
          )}
          {!isMobile ? (
            <Link className="Header-logo" to={Paths.Home}>
              <img src={Logo} alt="" />
            </Link>
          ) : (
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
          )}

          {!isMobile ? (
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
          ) : (
            <Link className="Header-logo" to={Paths.Home}>
              <img src={Logo} alt="" />
            </Link>
          )}

          <div className="Header-actions flex items-center">
            {!profileState ? (
              <div className="Header-login">
                <Button title="Đăng nhập" type="primary" size="large" link={`${LayoutPaths.Auth}${Paths.Login}`} />
              </div>
            ) : (
              <>
                <div className="Header-language">
                  <img src={ImageVietnamFlag} alt="" />
                </div>
                <div className="Header-account">
                  <DropdownMenu options={dataAccountMenu} minWidth="24rem" placement="bottomRight">
                    <Avatar size={40} />
                  </DropdownMenu>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
