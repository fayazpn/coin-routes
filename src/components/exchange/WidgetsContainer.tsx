import OrderBookContainer from './order-book/OrderBookContainer';
import PairGraphContainer from './pair-graph/PairGraphContainer';
import TopStatsContainer from './top-stats/TopStatsContainer';

function WidgetsContainer() {
  return (
    <>
      <TopStatsContainer />
      <PairGraphContainer />
      <OrderBookContainer />
    </>
  );
}

export default WidgetsContainer;
