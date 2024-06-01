import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ROUTES } from './constants/appConstants';
import MainLayout from './layouts/MainLayout/MainLayout';
import ExchangePage from './pages/exchange/ExchangePage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={`${ROUTES.EXCHANGE}/:id`} element={<ExchangePage />} />

          {/* Wild card route to redirect to main */}
          <Route
            path="*"
            element={<Navigate to={`${ROUTES.EXCHANGE}/BTC-USD`} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
