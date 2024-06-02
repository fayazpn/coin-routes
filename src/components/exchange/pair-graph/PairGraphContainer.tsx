import SectionHeader from '@app/components/common/SectionHeader';
import * as S from '@app/pages/exchange/ExchangePage.styles';
import PairGraph from './PairGraph';

function PairGraphContainer() {
  return (
    <S.PairGraphWrapper>
      <SectionHeader title="BTC-USD Current Price" />
      <PairGraph />
    </S.PairGraphWrapper>
  );
}

export default PairGraphContainer;
