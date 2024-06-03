import { ORDERS_CONST } from '@app/constants/appConstants';
import { FONT_SIZES, FONT_WEIGHT } from '@app/constants/themeConstants';
import * as S from '@app/pages/exchange/ExchangePage.styles';
import { OrderType } from '@app/types/types';
import { Stack, Typography, useTheme } from '@mui/material';

type RowDataProps = {
  type: OrderType;
  size: number;
  price: number;
  total: string;
};
const formatNumber = (num: number, decimals: number) => num.toFixed(decimals);
export const PRICE_DECIMALS = 2;
export const SIZE_DECIMALS = 8;

function RowData({ type, size, price, total }: RowDataProps) {
  const theme = useTheme();

  return (
    <S.RowData>
      <Stack direction="row" justifyContent="space-evenly">
        <Typography
          variant="subtitle1"
          fontSize={FONT_SIZES.xs}
          fontWeight={FONT_WEIGHT.semibold}
          minWidth="7rem"
        >
          {formatNumber(size, SIZE_DECIMALS)}
        </Typography>
        <Typography
          variant="subtitle1"
          fontSize={FONT_SIZES.xs}
          fontWeight={FONT_WEIGHT.semibold}
          minWidth="7rem"
        >
          {formatNumber(price, PRICE_DECIMALS)}
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
          minWidth="7rem"
        >
          {total}
        </Typography>
      </Stack>
    </S.RowData>
  );
}

export default RowData;
