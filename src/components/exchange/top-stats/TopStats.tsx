import { ORDERS_CONST, WS_API_URL } from '@app/constants/appConstants';

import { isAllowedPair } from '@app/utils/utils';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useWebSocket from 'react-use-websocket';
import StatsCard from './StatsCard';

function TopStats() {
  const params = useParams();
  const [statsDetails, setStatsDetails] = useState({
    bestBid: '',
    bestBidQty: '',
    bestAsk: '',
    bestAskQty: '',
  });

  const processMessage = (event: MessageEvent) => {
    const data = JSON.parse(event.data);

    if (data.sequence_num) {
      const { events } = data;

      if (Array.isArray(events) && events.length > 0) {
        const { tickers } = events[0];
        if (Array.isArray(tickers) && tickers.length > 0) {
          setStatsDetails({
            bestBid: tickers[0].best_bid as string,
            bestBidQty: tickers[0].best_bid_quantity as string,
            bestAsk: tickers[0].best_ask as string,
            bestAskQty: tickers[0].best_ask_quantity as string,
          });
        }
      }
    }
  };

  const { sendJsonMessage, getWebSocket } = useWebSocket(WS_API_URL, {
    share: true,
    onOpen: () => console.log('WebSocket connection opened.'),
    onClose: () => console.log('WebSocket connection closed.'),
    shouldReconnect: () => true,
    onMessage: (event: WebSocketEventMap['message']) => processMessage(event),
  });

  useEffect(() => {
    function connect() {
      const unSubscribeMessage = {
        type: 'unsubscribe',
        channel: 'ticker',
        product_ids: [params.id],
      };
      sendJsonMessage(unSubscribeMessage);

      const subscribeMessage = {
        type: 'subscribe',
        channel: 'ticker',
        product_ids: [params.id],
      };
      sendJsonMessage(subscribeMessage);
    }
    if (params.id && isAllowedPair(params.id)) connect();
  }, [sendJsonMessage, getWebSocket, params.id]);

  if (!params.id || !isAllowedPair(params.id)) return 'no';

  return (
    <>
      <StatsCard
        side={ORDERS_CONST.BID}
        price={statsDetails.bestBid}
        size={statsDetails.bestBidQty}
        user="itbit"
        pair={params.id}
      />
      <StatsCard
        side={ORDERS_CONST.ASK}
        price={statsDetails.bestAsk}
        size={statsDetails.bestAskQty}
        user="kraken"
        pair={params.id}
      />
    </>
  );
}

export default TopStats;
