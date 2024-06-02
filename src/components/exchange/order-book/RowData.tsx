import { ORDERS_CONST } from '@app/constants/appConstants';
import { FONT_SIZES, FONT_WEIGHT } from '@app/constants/themeConstants';
import * as S from '@app/pages/exchange/ExchangePage.styles';
import { OrderType } from '@app/types/types';
import { Stack, Typography, useTheme } from '@mui/material';

type RowDataProps = {
  type: OrderType;
  size: string;
  price: string;
  total: string;
};

function RowData({ type, size, price, total }: RowDataProps) {
  const theme = useTheme();

  return (
    <S.RowData>
      <Stack direction="row" justifyContent="space-evenly">
        <Typography
          variant="subtitle1"
          fontSize={FONT_SIZES.xs}
          fontWeight={FONT_WEIGHT.semibold}
        >
          {size}
        </Typography>
        <Typography
          variant="subtitle1"
          fontSize={FONT_SIZES.xs}
          fontWeight={FONT_WEIGHT.semibold}
        >
          {price}
        </Typography>
        <Typography
          variant="subtitle1"
          fontSize={FONT_SIZES.xs}
          fontWeight={FONT_WEIGHT.semibold}
          color={
            type === ORDERS_CONST.BID
              ? theme.palette.success.main
              : theme.palette.error.main
          }
        >
          {total}
        </Typography>
      </Stack>
    </S.RowData>
  );
}

export default RowData;
