import { FONT_SIZES } from '@app/constants/themeConstants';
import * as S from '@app/pages/exchange/ExchangePage.styles';
import { Stack, Typography } from '@mui/material';

function RowLabel() {
  return (
    <S.RowLabel>
      <Stack direction="row" justifyContent="space-evenly">
        <Typography variant="subtitle2" fontSize={FONT_SIZES.sm}>
          Market Size
        </Typography>
        <Typography
          variant="subtitle2"
          fontSize={FONT_SIZES.sm}
          marginLeft="-3rem"
        >
          Price(USD)
        </Typography>
        <Typography
          variant="subtitle2"
          fontSize={FONT_SIZES.sm}
          marginLeft="-2rem"
        >
          Total
        </Typography>
      </Stack>
    </S.RowLabel>
  );
}

export default RowLabel;
