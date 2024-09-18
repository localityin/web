import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

import Header from './components/Header';
import router from './router';

const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    const trackingId = process.env.REACT_APP_GA_MEASUREMENT_ID;
    if (trackingId) {
      ReactGA.initialize(trackingId);
      ReactGA.send({ hitType: 'pageview', page: location.pathname });
    }
  }, [location]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      {/* Only here to track page views */}
      <TrackPageView />
      <Routes>
        <Route path="/">
          {router.map((value) =>
            value.index ? (
              <Route index={true} element={value.element} />
            ) : (
              <Route path={value.path} element={value.element} />
            )
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
