// screens
import Home from '../screens/home';
import About from '../screens/about';
import PrivacyPolicy from '../screens/privacy-policy';
import Error from '../screens/error';

const router = [
  {
    path: '',
    index: true,
    element: <Home />,
  },
  {
    path: '/privacy',
    index: false,
    element: <PrivacyPolicy />,
  },
  {
    path: '/about',
    index: false,
    element: <About />,
  },
  {
    path: '*',
    index: false,
    element: <Error />,
  },
];

export default router;
