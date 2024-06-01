import { ORDERS_CONST } from '@app/constants/appConstants';
import { FONT_WEIGHT } from '@app/constants/themeConstants';
import * as S from '@app/pages/exchange/ExchangePage.styles';
import { AllowedPairs, OrderType } from '@app/types/types';
import { Box, CardContent, Stack, Typography } from '@mui/material';

export type StatsCardProps = {
  side: OrderType;
  user: string;
  price: string;
  size: string;
  pair: AllowedPairs;
};

function StatsCard({ side, user, price, size, pair }: StatsCardProps) {
  return (
    <S.StatsCard $side={side}>
      <CardContent>
        <Stack direction="row" gap={1} alignItems="center">
          <Typography variant="h5">
            {side === ORDERS_CONST.BID ? 'Best Bid:' : 'Best Ask:'}
          </Typography>
          <Typography variant="h6" fontWeight={FONT_WEIGHT.medium}>
            {user}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          marginTop="2.5rem"
          gap={8}
        >
          <Stack direction="column" alignItems="flex-start">
            <Typography variant="h3">{price}</Typography>
            <Typography variant="subtitle2">Price</Typography>
          </Stack>

          <Stack direction="column">
            <Typography variant="h3">{size}</Typography>
            <Typography variant="subtitle2">Quantity</Typography>
          </Stack>
        </Stack>

        <Box marginTop="2rem">
          <Typography variant="h6">{pair}</Typography>
        </Box>
      </CardContent>
    </S.StatsCard>
  );
}

export default StatsCard;
