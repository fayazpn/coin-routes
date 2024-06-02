import SectionHeader from '@app/components/common/SectionHeader';
import * as S from '@app/pages/exchange/ExchangePage.styles';
import { Stack } from '@mui/material';
import TopStats from './TopStats';

function TopStatsContainer() {
  return (
    <S.TopStatsWrapper>
      <SectionHeader title="Overall Statistics" />
      <Stack
        direction={{ sm: 'column', md: 'row' }}
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="space-evenly"
        padding="1em"
        gap={{ sm: 2, md: 1 }}
      >
        <TopStats />
      </Stack>
    </S.TopStatsWrapper>
  );
}

export default TopStatsContainer;
