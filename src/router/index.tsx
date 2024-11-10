import Home from '../screens/home';
import About from '../screens/about';
import PrivacyPolicy from '../screens/privacy-policy';
import Error from '../screens/error';
import RateOrder from '../screens/rate-order';

const router = [
  {
    path: '/',
    index: true,
    element: <Home />,
  },
  {
    path: '/orders',
    element: null, // Placeholder since /orders itself has no direct component
    children: [
      {
        path: 'rate/:token', // Nested path within /orders
        element: <RateOrder />,
      },
    ],
  },
  {
    path: '/privacy',
    element: <PrivacyPolicy />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '*',
    element: <Error />,
  },
];

export default router;
