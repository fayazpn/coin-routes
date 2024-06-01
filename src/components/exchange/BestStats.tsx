import * as S from '@app/pages/exchange/ExchangePage.styles';
import { Stack } from '@mui/material';
import SectionHeader from '../common/SectionHeader';
import StatsCard from './StatsCard';

function BestStats() {
  return (
    <S.BestStatsWrapper>
      <SectionHeader title="Overall Statistics" />
      <Stack
        direction={{ sm: 'column', md: 'row' }}
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="space-evenly"
        padding="1rem 2rem"
        gap={{ sm: 2, md: 0 }}
      >
        <StatsCard
          side="buy"
          price="4367.9999"
          size="0.0123"
          user="itbit"
          pair="BTC-USD"
        />
        <StatsCard
          side="sell"
          price="4300.9999"
          size="1.0123"
          user="kraken"
          pair="BTC-USD"
        />
      </Stack>
    </S.BestStatsWrapper>
  );
}

export default BestStats;
