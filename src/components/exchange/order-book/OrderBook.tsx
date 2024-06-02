import SectionHeader from '@app/components/common/SectionHeader';
import { ORDERS_CONST } from '@app/constants/appConstants';
import * as S from '@app/pages/exchange/ExchangePage.styles';
import RowAggrigate from './RowAggrigate';
import RowData from './RowData';
import RowLabel from './RowLabel';
import Spread from './Spread';

function OrderBook() {
  return (
    <S.OrderBookWrapper>
      <SectionHeader title="Order Book" />
      <S.OrderBookContainer>
        <RowLabel />
        {Array.from({ length: 25 }).map((_, index) => (
          <RowData
            size="2000"
            price="3500"
            total="4000"
            type={ORDERS_CONST.ASK}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          />
        ))}
        <Spread />
        {Array.from({ length: 25 }).map((_, index) => (
          <RowData
            size="2000"
            price="3500"
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
