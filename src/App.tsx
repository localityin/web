import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"

import router from './router';
import config from './config';

const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    const trackingId = config.analytics.trackingId;
    if (trackingId) {
      ReactGA.initialize(trackingId);
      ReactGA.send({ hitType: 'pageview', page: location.pathname });
    }
  }, [location]);

  return null;
};

const renderRoutes = (routes: typeof router) => {
  return routes.map((route, index) => {
    if (route.children) {
      return (
        <Route key={index} path={route.path} element={route.element}>
          {renderRoutes(route.children)}
        </Route>
      );
    }
    return <Route key={index} path={route.path} index={route.index} element={route.element} />;
  });
};

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider value={defaultSystem}>
        <TrackPageView />
        <Routes>{renderRoutes(router)}</Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
