import Loader from '@app/components/common/Loader';
import SectionHeader from '@app/components/common/SectionHeader';
import {
  MAX_ORDER_DISPLAY,
  ORDERS_CONST,
  PRICE_DECIMALS,
  SIZE_DECIMALS,
} from '@app/constants/appConstants';
import useWS from '@app/hooks/useWS';
import * as S from '@app/pages/exchange/ExchangePage.styles';
import { AllowedPairs } from '@app/types/types';
import {
  applyDeltas,
  extractCurrency,
  formatNumber,
  getSpreadAmount,
  isAllowedPair,
} from '@app/utils/utils';
import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import RowAggrigate from './RowAggrigate';
import RowData from './RowData';
import RowLabel from './RowLabel';
import Spread from './Spread';

type UpdateEvent = {
  side: 'bid' | 'offer';
  price_level: string;
  new_quantity: string;
};

function OrderBook() {
  const params = useParams();
  const [bids, setBids] = useState<number[][]>([]);
  const [offers, setOffers] = useState<number[][]>([]);

  const processMessage = useCallback((event: MessageEvent) => {
    const data = JSON.parse(event.data);
    if (data.channel === 'l2_data' && data.events.length > 0) {
      const { updates } = data.events[0];

      updates.forEach(({ side, price_level, new_quantity }: UpdateEvent) => {
        const price = parseFloat(price_level);
        const quantity = parseFloat(new_quantity);

        if (side === 'bid') {
          setBids((currentBids) =>
            applyDeltas(currentBids, [[price, quantity]], side).slice(
              0,
              MAX_ORDER_DISPLAY
            )
          );
        } else {
          setOffers((currentOffers) =>
            applyDeltas(currentOffers, [[price, quantity]], side).slice(
              0,
              MAX_ORDER_DISPLAY
            )
          );
        }
      });
    }
  }, []);

  // seperate channel opening as per coinbase best practices
  useWS('level2', processMessage, false);

  if (!params.id || !isAllowedPair(params.id)) return 'No Data';

  if (!bids.length && !offers.length) {
    return <Loader />;
  }

  return (
    <S.OrderBookWrapper>
      <SectionHeader title="Order Book" />
      <S.OrderBookContainer>
        <RowLabel />
        {offers.map(([price, size, rowTotal, vis]) => (
          <RowData
            size={formatNumber(size, SIZE_DECIMALS)}
            price={formatNumber(price, PRICE_DECIMALS)}
            total={formatNumber(rowTotal || 0, SIZE_DECIMALS)}
            type={ORDERS_CONST.ASK}
            key={price} // price as key as it is unique
            depth={vis}
          />
        ))}
        <Spread
          currency={extractCurrency(params?.id as AllowedPairs | undefined)}
          spreadAmnt={getSpreadAmount(bids, offers)}
        />
        {bids.map(([price, size, rowTotal, vis]) => (
          <RowData
            size={formatNumber(size, SIZE_DECIMALS)}
            price={formatNumber(price, PRICE_DECIMALS)}
            total={formatNumber(rowTotal || 0, SIZE_DECIMALS)}
            type={ORDERS_CONST.BID}
            key={price}
            depth={vis}
          />
        ))}
        <RowAggrigate />
      </S.OrderBookContainer>
    </S.OrderBookWrapper>
  );
}

export default OrderBook;
