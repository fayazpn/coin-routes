import OrderBook from './order-book/OrderBook';
import PairGraphContainer from './pair-graph/PairGraphContainer';
import TopStatsContainer from './top-stats/TopStatsContainer';

function WidgetsContainer() {
  return (
    <>
      <TopStatsContainer />
      <PairGraphContainer />
      <OrderBook />
    </>
  );
}

export default WidgetsContainer;
