import OrderBook from './order-book/OrderBook';
import PairGraphContainer from './pair-graph/PairGraphContainer';

function WidgetsContainer() {
  return (
    <>
      {/* <TopStatsContainer /> */}
      <PairGraphContainer />
      <OrderBook />
    </>
  );
}

export default WidgetsContainer;
