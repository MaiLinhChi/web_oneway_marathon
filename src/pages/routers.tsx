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
const OneWayMarathonCatBa = lazy(() => retryLoadComponent(() => import('@/pages/OneWayMarathonCatBa')));
const OneWayMarathonVungTau = lazy(() => retryLoadComponent(() => import('@/pages/OneWayMarathonVungTau')));

const Login = lazy(() => retryLoadComponent(() => import('@/pages/Login')));
const ForgotPassword = lazy(() => retryLoadComponent(() => import('@/pages/ForgotPassword')));
const ChangePassword = lazy(() => retryLoadComponent(() => import('@/pages/ChangePassword')));
const Register = lazy(() => retryLoadComponent(() => import('@/pages/Register')));

const Dashboard = lazy(() => retryLoadComponent(() => import('@/pages/Dashboard')));
const Profile = lazy(() => retryLoadComponent(() => import('@/pages/Profile')));
const ProfileEdit = lazy(() => retryLoadComponent(() => import('@/pages/ProfileEdit')));
const TournamentDetail = lazy(() => retryLoadComponent(() => import('@/pages/TournamentDetail')));
const TournamentRegister = lazy(() => retryLoadComponent(() => import('@/pages/TournamentRegisterPage')));
const TournamentPayment = lazy(() => retryLoadComponent(() => import('@/pages/TournamentPayment')));
const RollBib = lazy(() => retryLoadComponent(() => import('@/pages/RollBib')));
const NotFound = lazy(() => retryLoadComponent(() => import('@/pages/NotFound')));
const BuyOnlineTicketTutorials = lazy(() => retryLoadComponent(() => import('@/pages/BuyOnlineTicketTutorials')));
const PrivacyPayment = lazy(() => retryLoadComponent(() => import('@/pages/PrivacyPayment')));
const PrivacySolvedProblem = lazy(() => retryLoadComponent(() => import('@/pages/PrivacySolvedProblem')));
const PrivacyRefund = lazy(() => retryLoadComponent(() => import('@/pages/PrivacyRefund')));
const PrivacyPrivate = lazy(() => retryLoadComponent(() => import('@/pages/PrivacyPrivate')));
const PrivacyDelivery = lazy(() => retryLoadComponent(() => import('@/pages/PrivacyDelivery')));
const TournamentRegisterGroupSuccess = lazy(() =>
  retryLoadComponent(() => import('@/pages/TournamentRegisterPage/TournamentRegisterGroupSuccess')),
);
const TournamentRegisterGroupConfirm = lazy(() =>
  retryLoadComponent(() => import('@/pages/TournamentRegisterPage/TournamentRegisterGroupConfirm')),
);
const TournamentRegisterGroupJoin = lazy(() =>
  retryLoadComponent(() => import('@/pages/TournamentRegisterPage/TournamentRegisterGroupJoin')),
);

export const LayoutPaths = {
  Guest: '/',
  Auth: '/auth',
  Admin: '/admin',
};

export const ModulePaths = {};

export const Paths = {
  Home: '/',
  OneWayMarathonCatBa: '/cat-ba',
  OneWayMarathonVungTau: '/vung-tau',

  Login: '/login',
  ForgotPassword: '/forgot-password',
  ChangePassword: '/change-password',
  Register: '/register',
  Dashboard: '/',
  Profile: '/profile',
  ProfileEdit: '/profile/edit',
  TournamentDetail: (id?: string): string => `/${id || ':id'}`,
  TournamentRegister: `/tournaments/register`,
  TournamentPayment: (id?: string): string => `/tournaments/payment/${id || ':id'}`,
  RollBib: '/bib',
  NotFound: '/404',
  BuyOnlineTicketTutorials: '/buy-online-ticket-tutorials',
  PrivacyPayment: '/privacy-payment',
  PrivacySolvedProblem: '/privacy-solved-problem',
  PrivacyRefund: '/privacy-refund',
  PrivacyPrivate: '/privacy-private',
  PrivacyDelivery: '/privacy-delivery',
  TournamentRegisterGroupSuccess: '/register-group/success',
  TournamentRegisterGroupConfirm: (id?: string): string => `/group/cat-ba/${id || ':id'}`,
  TournamentRegisterGroupJoin: '/register-group/join',

  Rest: '*',
};

export const Pages = {
  Home,
  OneWayMarathonCatBa,
  OneWayMarathonVungTau,

  Login,
  ForgotPassword,
  ChangePassword,
  Register,
  Dashboard,
  Profile,
  ProfileEdit,
  TournamentDetail,
  TournamentRegister,
  TournamentPayment,
  RollBib,
  NotFound,
  BuyOnlineTicketTutorials,
  PrivacyPayment,
  PrivacySolvedProblem,
  PrivacyRefund,
  PrivacyPrivate,
  PrivacyDelivery,
  TournamentRegisterGroupSuccess,
  TournamentRegisterGroupConfirm,
  TournamentRegisterGroupJoin,
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
