import OrderBook from './order-book/OrderBook';
import PairGraph from './PairGraph';
import TopStats from './top-stats/TopStats';

function WidgetsContainer() {
  return (
    <>
      <TopStats />
      <PairGraph />
      <OrderBook />
    </>
  );
}

export default WidgetsContainer;
