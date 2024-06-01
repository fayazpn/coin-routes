import * as S from '@app/pages/exchange/ExchangePage.styles';
import { Stack, Typography } from '@mui/material';

function Spread() {
  return (
    <S.SpreadContainer>
      <Stack
        direction="row"
        alignItems="center"
        gap={3}
        justifyContent="center"
      >
        <Typography variant="subtitle2">USD Spread</Typography>
        <Typography variant="subtitle2">7.88</Typography>
      </Stack>
    </S.SpreadContainer>
  );
}

export default Spread;
