import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

// components
import Header from './components/Header';

// router
import router from './router';

function App() {
  const location = useLocation();

  useEffect(() => {
    const trackingId = process.env.REACT_APP_GA_MEASUREMENT_ID;

    if (trackingId) {
      ReactGA.initialize(trackingId);
      ReactGA.send({ hitType: 'pageview', page: location.pathname });
    }
  }, [location]);

  return (
    <BrowserRouter>
      <Header />
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
}

export default App;
