import React, { useEffect } from 'react';
import { globalHistory, Redirect, Router } from '@reach/router';
import { useDispatch } from 'react-redux';

import { AuthRoute, LayoutPaths, Pages, Paths, ProtectedRoute, PublicRoute } from '@/pages/routers';
import Guest from '@/layouts/Guest';
import Auth from '@/layouts/Auth';
import Admin from '@/layouts/Admin';
import { uiActions } from '@/redux/actions';
import { scrollToTop } from '@/utils/functions';

const App: React.FC = () => {
  const dispatch = useDispatch();

  globalHistory.listen(() => {
    scrollToTop();
  });

  useEffect(() => {
    const updateSize = (): void => {
      dispatch(uiActions.setDevice(window.innerWidth));
    };
    window.addEventListener('resize', updateSize);
    return (): void => window.removeEventListener('resize', updateSize);
  }, [dispatch]);

  return (
    <div className="App">
      <Router primary={false}>
        <Guest path={LayoutPaths.Guest}>
          <PublicRoute path={Paths.Home} component={Pages.Home} />
          <PublicRoute path={Paths.OneWayMarathonCatBa} component={Pages.OneWayMarathonCatBa} />
          <PublicRoute path={Paths.OneWayMarathonVungTau} component={Pages.OneWayMarathonVungTau} />
          <PublicRoute path={Paths.Profile} component={Pages.Profile} />
          <PublicRoute path={Paths.ProfileEdit} component={Pages.ProfileEdit} />
          <PublicRoute path={Paths.TournamentRegister} component={Pages.TournamentRegister} />
          <PublicRoute path={Paths.TournamentDetail()} component={Pages.TournamentDetail} />
          <PublicRoute path={Paths.TournamentPayment()} component={Pages.TournamentPayment} />
          <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Guest}${Paths.Home}`} />
        </Guest>

        <Auth path={LayoutPaths.Auth}>
          <AuthRoute path={Paths.Login} component={Pages.Login} />
          <AuthRoute path={Paths.ForgotPassword} component={Pages.ForgotPassword} />
          <AuthRoute path={Paths.ChangePassword} component={Pages.ChangePassword} />
          <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Auth}${Paths.Login}`} />
        </Auth>

        <Admin path={LayoutPaths.Admin}>
          <ProtectedRoute path={Paths.Dashboard} component={Pages.Dashboard} />
          <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Admin}${Paths.Dashboard}`} />
        </Admin>
      </Router>
    </div>
  );
};

export default App;
