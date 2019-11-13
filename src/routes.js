import React from 'react';
import { Redirect, Route } from 'react-router-dom';

// Layout Types
import { DefaultLayout } from './pages/layouts';

// Route Views
import Dashboard from './pages/Dashboard';
import Chart from './pages/Chart';
import LoginPage from './pages/UserPages/LoginPage';
import withAuth from './wIthAuth';
import RegistrationPage from './pages/UserPages/Registration';

// const RestrictedRoute = ({component: Component, ...rest, authUser}) =>
//     <Route
//         {...rest}
//         render={props =>
//             authUser
//                 ? <Component {...props} />
//                 : <Redirect
//                     to={{
//                         pathname: '/login',
//                         state: {from: props.location}
//                     }}
//                 />}
//     />;
export default [
  {
    path: '/',
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to='/login' /> // Default loding page
  },
  //login page
  {
    path: '/login',
    layout: DefaultLayout,
    component: LoginPage
  },
  //Registration page
  {
    path: '/Registration',
    layout: DefaultLayout,
    component: RegistrationPage
  },
  //Solar graph
  {
    path: '/Solar',
    layout: DefaultLayout,
    component: withAuth(Chart)
  },
  //Battery graph
  {
    path: '/Battey',
    layout: DefaultLayout,
    component: withAuth(Chart)
  },
  //Grid graph
  {
    path: '/Grid',
    layout: DefaultLayout,
    component: withAuth(Chart)
  },
  //Load graph
  {
    path: '/Load',
    layout: DefaultLayout,
    component: withAuth(Chart)
  },
  //Dashboard page
  {
    path: '/Dashboard',
    layout: DefaultLayout,
    component: withAuth(Dashboard)
  }
];
