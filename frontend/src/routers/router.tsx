import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '@layouts/MainLayout/MainLayout';

import ErrorPage from '@pages/ErrorPage/ErrorPage';
import HomePage from '@pages/HomePage/HomePage';
import LpDetailPage from '@pages/LpDetailPage/LpDetailPage';
import LpListPage from '@pages/LpListPage/LpListPage';
import SigninPage from '@pages/SigninPage/SigninPage';
import SignupPage from '@pages/SignupPage/SignupPage';

import { NAVIGATION_PATH } from '@constants/path';

export const router = createBrowserRouter([
  {
    path: NAVIGATION_PATH.home,
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: NAVIGATION_PATH.signin,
        element: <SigninPage />,
      },
      {
        path: NAVIGATION_PATH.signup,
        element: <SignupPage />,
      },
      {
        path: NAVIGATION_PATH.lp.list,
        element: <LpListPage />,
      },
      {
        path: NAVIGATION_PATH.lp.detail,
        element: <LpDetailPage />,
      },
    ],
  },
]);
