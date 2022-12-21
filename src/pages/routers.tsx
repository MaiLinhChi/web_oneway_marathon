import React, { lazy, Suspense } from 'react';
import { Redirect, RouteComponentProps } from '@reach/router';

import Helpers from '@/services/helpers';
import Loading from '@/components/Loading';

const retryLoadComponent = (fn: () => Promise<unknown>, retriesLeft = 5, interval = 1000): any =>
  new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            reject(error);
            return;
          }

          retryLoadComponent(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });

const Home = lazy(() => retryLoadComponent(() => import('@/pages/Home')));

const Login = lazy(() => retryLoadComponent(() => import('@/pages/Login')));
const ForgotPassword = lazy(() => retryLoadComponent(() => import('@/pages/ForgotPassword')));
const ChangePassword = lazy(() => retryLoadComponent(() => import('@/pages/ChangePassword')));

const Dashboard = lazy(() => retryLoadComponent(() => import('@/pages/Dashboard')));
const Profile = lazy(() => retryLoadComponent(() => import('@/pages/Profile')));
const ProfileEdit = lazy(() => retryLoadComponent(() => import('@/pages/ProfileEdit')));

export const LayoutPaths = {
  Guest: '/',
  Auth: '/auth',
  Admin: '/admin',
};

export const ModulePaths = {};

export const Paths = {
  Home: '/',

  Login: '/',
  ForgotPassword: '/forgot-password',
  ChangePassword: '/change-password',

  Dashboard: '/',
  Profile: '/profile',
  ProfileEdit: '/profile/edit',

  Rest: '*',
};

export const Pages = {
  Home,

  Login,
  ForgotPassword,
  ChangePassword,

  Dashboard,
  Profile,
  ProfileEdit,
};

interface IRouteProps extends RouteComponentProps {
  component: any;
}

export const AuthRoute: React.FC<IRouteProps> = ({ component: Component, ...rest }) => {
  const loggedIn: string | any = Helpers.getAccessToken();

  return loggedIn ? (
    <Redirect noThrow from={Paths.Rest} to={LayoutPaths.Admin} />
  ) : (
    <Suspense fallback={<Loading />}>
      <Component {...rest} />
    </Suspense>
  );
};

export const ProtectedRoute: React.FC<IRouteProps> = ({ component: Component, ...rest }) => {
  const loggedIn: string | any = Helpers.getAccessToken();

  return loggedIn ? (
    <Suspense fallback={<Loading />}>
      <Component {...rest} />
    </Suspense>
  ) : (
    <Redirect noThrow from={Paths.Rest} to={LayoutPaths.Auth} />
  );
};

export const PublicRoute: React.FC<IRouteProps> = ({ component: Component, ...rest }) => (
  <Suspense fallback={<Loading />}>
    <Component {...rest} />
  </Suspense>
);
