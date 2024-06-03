import SectionHeader from '@app/components/common/SectionHeader';
import { ORDERBOOK_LEVELS, ORDERS_CONST } from '@app/constants/appConstants';
import useWS from '@app/hooks/useWS';
import * as S from '@app/pages/exchange/ExchangePage.styles';
import { useCallback, useState } from 'react';
import RowAggrigate from './RowAggrigate';
import RowData from './RowData';
import RowLabel from './RowLabel';
import Spread from './Spread';

type UpdateEvent = {
  side: 'bid' | 'offer';
  price_level: string;
  new_quantity: string;
};
type WebSocketMessage = {
  channel: string;
  events: {
    type: string;
    product_id: string;
    updates: UpdateEvent[];
  }[];
};
type OrderBookLevel = [number, number];

function OrderBook() {
  const [bids, setBids] = useState<OrderBookLevel[]>([]);
  const [offers, setOffers] = useState<OrderBookLevel[]>([]);
  const processMessage = useCallback((event: MessageEvent) => {
    const data: WebSocketMessage = JSON.parse(event.data);
    if (data.channel === 'l2_data' && data.events.length > 0) {
      const { updates } = data.events[0];

      updates.forEach(({ side, price_level, new_quantity }) => {
        const price = parseFloat(price_level);
        const quantity = parseFloat(new_quantity);

        if (side == 'bid') {
          setBids((currentBids) =>
            applyDeltas(currentBids, [[price, quantity]], side)
          );
        } else {
          setOffers((currentOffers) =>
            applyDeltas(currentOffers, [[price, quantity]], side)
          );
        }
      });
    }
  }, []);

  // console.log(bids, 'bids', offers, 'offers');

  useWS('level2', processMessage, false);

  return (
    <S.OrderBookWrapper>
      <SectionHeader title="Order Book" />
      <S.OrderBookContainer>
        <RowLabel />
        {offers.map(([price, size], index) => (
          <RowData
            size={size}
            price={price}
            total="4000"
            type={ORDERS_CONST.ASK}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          />
        ))}
        <Spread />
        {bids.map(([price, size], index) => (
          <RowData
            size={price}
            price={size}
            total="4000"
            type={ORDERS_CONST.BID}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          />
        ))}
        <RowAggrigate />
      </S.OrderBookContainer>
    </S.OrderBookWrapper>
  );
}

export default OrderBook;

const applyDeltas = (
  currentLevels: OrderBookLevel[],
  orders: OrderBookLevel[],
  side: string
): OrderBookLevel[] => {
  let updatedLevels = [...currentLevels];

  if (side === 'buy') {
    console.log('buying');
  }

  orders.forEach(([price, size]) => {
    if (size === 0) {
      updatedLevels = updatedLevels.filter((level) => level[0] !== price);
    } else {
      const index = updatedLevels.findIndex((level) => level[0] === price);
      if (index !== -1) {
        updatedLevels[index] = [price, size];
      } else {
        updatedLevels.push([price, size]);
        updatedLevels = updatedLevels
          .sort((a, b) => a[0] - b[0])
          .slice(0, ORDERBOOK_LEVELS);
      }
    }
  });

  return updatedLevels;
};
