import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import Header from './components/Header';
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
      // Recursively render child routes
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
      <Header />
      {/* Track page views */}
      <TrackPageView />
      <Routes>{renderRoutes(router)}</Routes>
    </BrowserRouter>
  );
};

export default App;
