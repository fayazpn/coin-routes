import ActionButton from '@app/components/common/ActionButton';
import { FONT_SIZES, FONT_WEIGHT } from '@app/constants/themeConstants';
import * as S from '@app/pages/exchange/ExchangePage.styles';
import { Stack, Typography } from '@mui/material';

function RowAggrigate() {
  return (
    <S.AggrigateContainer>
      <Stack direction="row" justifyContent="space-evenly" alignItems="center">
        <Typography
          variant="subtitle2"
          fontSize={FONT_SIZES.xs}
          fontWeight={FONT_WEIGHT.semibold}
        >
          Aggrigate
        </Typography>
        <Typography
          variant="subtitle2"
          fontSize={FONT_SIZES.xs}
          fontWeight={FONT_WEIGHT.semibold}
        >
          0.01
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap={1}
        >
          <ActionButton onClick={() => {}}>-</ActionButton>
          <ActionButton onClick={() => {}}>+</ActionButton>
        </Stack>
      </Stack>
    </S.AggrigateContainer>
  );
}

export default RowAggrigate;
