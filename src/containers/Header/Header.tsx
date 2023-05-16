import React, { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import { Link, navigate, useLocation } from '@reach/router';
import { LayoutPaths, Paths } from '@/pages/routers';
import Logo from '@/assets/images/logo.svg';
import Button from '@/components/Button';
import Avatar from '@/components/Avatar';
import DropdownMenu from '@/components/DropdownMenu';
import { useOnClickOutside } from 'usehooks-ts';
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
import ImageVietnamFlag from '@/assets/images/image-vietnam-flag.png';

const Header: React.FC<THeaderProps> = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const isMobile = useSelector((state: TRootState) => state.uiReducer.device.isMobile);
  const atk = AuthHelpers.getAccessToken();
  const handleLogout = (): void => {
    dispatch(authLogoutAction.success(handleAuthLogoutSuccess()));
  };
  const openMenuToggle = (): void => {
    setOpen(!open);
  };
  const closeMenu = (): void => {
    setOpen(false);
  };
  // const handleAuthLogoutSuccess = (): void => {
  //   AuthHelpers.clearTokens();
  //   dispatch(getProfileAction.success(undefined));
  //   showNotification(ETypeNotification.SUCCESS, 'Đăng xuất tài khoản thành công !');
  //   navigate(Paths.Home);
  // };
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
    if (atk) {
      const params = {
        authorization: `Bearer ${atk}`,
      };
      dispatch(getProfileAction.request({ params }));
    }
  }, [dispatch, atk]);
  const profileState = useSelector((state: TRootState) => state.profileReducer.getProfileResponse?.data);
  useEffect(() => {
    getProfile();
  }, [getProfile]);
  useOnClickOutside(ref, closeMenu);
  return (
    <>
      {isMobile ? (
        <>
          <nav className={`Header-nav-mobile ${open ? 'open' : ''}`} ref={ref}>
            <div className="Header-wrapper-toggle-close" onClick={openMenuToggle}>
              <Icon name={EIconName.Close} />
            </div>
            <ul className="Header-nav-list flex">
              {dataHeaderNav.map((item, index) => (
                <li className="Header-nav-list-item" key={index}>
                  {item.hash && pathname === Paths.Home ? (
                    <a href={item.hash}>{item.title}</a>
                  ) : (
                    <Link to={item.link}>{item.title}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="overlay-menu" style={{ 'display': open ? 'block' : 'none' }} />
        </>
      ) : (
        ''
      )}
      <header className={classNames('Header')}>
        <div className="container">
          <div className="Header-wrapper flex items-center justify-between">
            {isMobile ? (
              <>
                <div className="Header-wrapper-toggle" onClick={openMenuToggle}>
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
                  {dataHeaderNav.map((item, index) => (
                    <li className="Header-nav-list-item" key={index}>
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
                  {dataHeaderNav.map((item, index) => (
                    <li className="Header-nav-list-item" key={index}>
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
              <div className="Header-language">
                <img src={ImageVietnamFlag} alt="" />
              </div>
              {!profileState ? (
                pathname === Paths.Login ? (
                  <div className="Header-login">
                    <Button
                      title="Tạo tài khoản"
                      type="primary"
                      size="large"
                      backgroundColor="#E8EFFF"
                      borderColor="#E8EFFF"
                      titleColor="#1964FF"
                      link={`${LayoutPaths.Auth}${Paths.Register}`}
                    />
                  </div>
                ) : (
                  <div className="Header-login">
                    <Button title="Đăng nhập" type="primary" size="large" link={`${LayoutPaths.Auth}${Paths.Login}`} />
                  </div>
                )
              ) : (
                <>
                  <div className="Header-account">
                    <DropdownMenu options={dataAccountMenu} minWidth="24rem" placement="bottomRight">
                      <Avatar image={process.env.REACT_APP_SERVICE_BASE_URL + profileState?.avatar} size={40} />
                    </DropdownMenu>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
