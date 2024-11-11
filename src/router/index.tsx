// layouts
import StoreLayout from '../layouts/store';
// import AuthLayout from '../layouts/auth';
import CommonLayout from '../layouts/common';
import UserLayout from '../layouts/user';

// screens
import Home from '../screens/home';
import About from '../screens/about';
import PrivacyPolicy from '../screens/privacy-policy';
import Error from '../screens/error';
import RateOrder from '../screens/rate-order';
import Inventory from '../screens/inventory';
import Loading from '../screens/loading';

const router = [
  {
    path: '/',
    element: <CommonLayout />,
    children: [
      { path: '', element: <Home />, index: true },
      {
        path: '/about',
        element: <About />,
        index: false
      },
      {
        path: '/privacy',
        element: <PrivacyPolicy />,
        index: false,
      },
    ],
  },
  {
    path: '/orders',
    element: <UserLayout />, // Placeholder since /orders itself has no direct component
    children: [
      {
        path: 'rate/:token', // Nested path within /orders
        element: <RateOrder />,
        index: false,
      },
    ],
  },
  // add routes for store, there is a single screen where the user can update inventory of store
  {
    path: '/store',
    element: <StoreLayout />,
    children: [
      {
        path: 'inventory',
        element: <Inventory />,
        index: false,
      }
    ]
  },
  {
    path: '/loading',
    element: <Loading />,
    children: [
      {
        path: ':token',
        element: <Loading />,
        index: false,
      }
    ]
  },
  {
    path: '*',
    element: <Error />,
    index: false,
  },
];

export default router;
