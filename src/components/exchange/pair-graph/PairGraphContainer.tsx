import SectionHeader from '@app/components/common/SectionHeader';
import * as S from '@app/pages/exchange/ExchangePage.styles';
import { useParams } from 'react-router-dom';
import PairGraph from './PairGraph';

function PairGraphContainer() {
  const params = useParams();
  return (
    <S.PairGraphWrapper>
      <SectionHeader title={`${params.id} Current Price`} />
      <PairGraph />
    </S.PairGraphWrapper>
  );
}

export default PairGraphContainer;
