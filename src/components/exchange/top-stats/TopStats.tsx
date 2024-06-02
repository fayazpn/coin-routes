/* eslint-disable no-console */
import { ORDERS_CONST } from '@app/constants/appConstants';

import useWS from '@app/hooks/useWS';
import { StatsDetailsType } from '@app/types/types';
import { isAllowedPair } from '@app/utils/utils';
import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import StatsCard from './StatsCard';

function TopStats() {
  const params = useParams();
  const [statsDetails, setStatsDetails] = useState<StatsDetailsType>();

  const processMessage = useCallback((event: MessageEvent) => {
    try {
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
    } catch (error) {
      console.error('Error parsing message data:', error);
    }
  }, []);

  useWS('ticker', processMessage);

  if (!params.id || !isAllowedPair(params.id)) return 'No Data';

  if (!statsDetails) return 'Loading';

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
