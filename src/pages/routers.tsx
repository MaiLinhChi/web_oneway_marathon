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
const OneWayMarathonDetail = lazy(() => retryLoadComponent(() => import('@/pages/OneWayMarathonDetail')));

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
const TournamentRegulars = lazy(() => retryLoadComponent(() => import('@/pages/TournamentRegisterPage')));
const EditBibGroup = lazy(() => retryLoadComponent(() => import('@/pages/EditBibGroup')));
const RollBib = lazy(() => retryLoadComponent(() => import('@/pages/RollBib')));
const NotFound = lazy(() => retryLoadComponent(() => import('@/pages/NotFound')));
const BuyOnlineTicketTutorials = lazy(() => retryLoadComponent(() => import('@/pages/BuyOnlineTicketTutorials')));
const PrivacyPayment = lazy(() => retryLoadComponent(() => import('@/pages/PrivacyPayment')));
const PrivacySolvedProblem = lazy(() => retryLoadComponent(() => import('@/pages/PrivacySolvedProblem')));
const PrivacyRefund = lazy(() => retryLoadComponent(() => import('@/pages/PrivacyRefund')));
const PrivacyPrivate = lazy(() => retryLoadComponent(() => import('@/pages/PrivacyPrivate')));
const PrivacyDelivery = lazy(() => retryLoadComponent(() => import('@/pages/PrivacyDelivery')));
const PaymentInstructions = lazy(() =>
  retryLoadComponent(() => import('@/pages/TournamentRegisterPage/PaymentInstructions')),
);
const TournamentRegisterGroupSuccess = lazy(() =>
  retryLoadComponent(() => import('@/pages/TournamentRegisterPage/TournamentRegisterGroupSuccess')),
);
const TournamentRegisterGroupConfirm = lazy(() =>
  retryLoadComponent(() => import('@/pages/TournamentRegisterPage/TournamentRegisterGroupConfirm')),
);
const TournamentRegisterGroupJoin = lazy(() =>
  retryLoadComponent(() => import('@/pages/TournamentRegisterPage/TournamentRegisterGroupJoin')),
);
const TournamentPaymentSuccess = lazy(() =>
  retryLoadComponent(() => import('@/pages/TournamentRegisterPage/TournamentPaymentSuccess')),
);
const TournamentRegisterGroupEnd = lazy(() =>
  retryLoadComponent(() => import('@/pages/TournamentRegisterPage/TournamentRegisterGroupEnd')),
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
  TournamentDetail: (id?: string): string => `/group/${id || ':id'}`,
  MarathonDetail: (id?: string): string => `/marathon/detail/${id || ':id'}`,
  TournamentRegister: (id?: string): string => `/tournaments/register/${id || ':id'}`,
  TournamentPayment: (id?: string): string => `/tournaments/payment/${id || ':id'}`,
  TournamentRegulars: `/tournaments/regulations`,
  RollBib: (id?: string): string => `/bib/${id || ':id'}`,
  NotFound: '/404',
  BuyOnlineTicketTutorials: '/buy-online-ticket-tutorials',
  PrivacyPayment: '/privacy-payment',
  PrivacySolvedProblem: '/privacy-solved-problem',
  PrivacyRefund: '/privacy-refund',
  PrivacyPrivate: '/privacy-private',
  PrivacyDelivery: '/privacy-delivery',
  PaymentInstructions: '/payment-instructions',
  TournamentRegisterGroupSuccess: (id?: string): string => `/register-group/success/${id || ':id'}`,
  TournamentRegisterGroupConfirm: '/:name/:id',
  TournamentRegisterGroupJoin: (id?: string): string => `/register-group/join/${id || ':id'}`,
  TournamentPaymentSuccess: (id?: string): string => `/payment-result/${id || ':id'}`,
  TournamentRegisterGroupEnd: `/register-group/end`,
  EditBibGroup: (id?: string): string => `/group/edit-bib/${id || ':id'}`,
  Rest: '*',
};

export const Pages = {
  Home,
  OneWayMarathonCatBa,
  OneWayMarathonDetail,

  Login,
  ForgotPassword,
  ChangePassword,
  Register,
  Dashboard,
  Profile,
  ProfileEdit,
  TournamentDetail,
  TournamentRegulars,
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
  PaymentInstructions,
  TournamentRegisterGroupSuccess,
  TournamentRegisterGroupConfirm,
  TournamentRegisterGroupJoin,
  TournamentPaymentSuccess,
  TournamentRegisterGroupEnd,
  EditBibGroup,
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
