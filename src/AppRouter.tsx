import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/appConstants';
import ExchangePage from './pages/ExchangePage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.EXCHANGE} element={<ExchangePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
