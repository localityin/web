import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Header from './components/Header';

// router
import router from './router';

function App() {
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
