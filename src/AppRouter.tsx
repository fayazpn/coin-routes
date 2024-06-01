import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/appConstants';
import ExchangePage from './pages/ExchangePage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={`${ROUTES.EXCHANGE}`}
          element={<Navigate to={`${ROUTES.EXCHANGE}/BTC-USD`} />}
        />
        <Route path={`${ROUTES.EXCHANGE}/:id`} element={<ExchangePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
