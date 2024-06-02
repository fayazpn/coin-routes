import OrderBook from './order-book/OrderBook';
import TopStatsContainer from './top-stats/TopStatsContainer';

function WidgetsContainer() {
  return (
    <>
      <TopStatsContainer />
      {/* <PairGraph /> */}
      <OrderBook />
    </>
  );
}

export default WidgetsContainer;
