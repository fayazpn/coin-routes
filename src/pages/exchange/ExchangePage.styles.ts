import { ORDERS_CONST } from '@app/constants/appConstants';
import { OrderType } from '@app/types/types';
import { Box, Card, Paper, styled } from '@mui/material';

export const TopStatsWrapper = styled(Paper)({
  padding: '1rem 2rem',
});

type StatsCardProps = { $side: OrderType };

export const StatsCard = styled(Card)(({ $side }: StatsCardProps) => ({
  background:
    $side === ORDERS_CONST.BID
      ? 'linear-gradient(to bottom, #2194ff78, transparent)'
      : 'linear-gradient(to bottom, #a0a04e, transparent)',
  borderRadius: '.8rem',
  marginTop: '1rem',
}));

export const OrderBookWrapper = styled(Paper)({
  padding: '1rem 2rem',
  minHeight: '25rem',
});

export const OrderBookContainer = styled(Box)({
  maxWidth: '70rem',
  marginTop: '2rem',
  marginInline: 'auto',
});

export const RowLabel = styled(Paper)({
  padding: '.5rem',
  marginInline: 'auto',
});

export const RowData = styled(Paper)({
  marginInline: 'auto',
  border: 0,
  marginBottom: '-.5rem',
});

export const SpreadContainer = styled(Paper)({
  padding: '.5rem',
  margin: '.8rem 0',
});
