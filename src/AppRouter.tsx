import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/appConstants';
import ExchangePage from './pages/ExchangePage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${ROUTES.EXCHANGE}/:id`} element={<ExchangePage />} />

        {/* Wild card route to redirect to main page */}
        <Route
          path="*"
          element={<Navigate to={`${ROUTES.EXCHANGE}/BTC-USD`} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
