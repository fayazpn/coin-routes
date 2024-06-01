import { ORDERS_CONST } from '@app/constants/appConstants';
import { OrderType } from '@app/types/types';
import { Card, Paper, styled } from '@mui/material';

export const TopStatsWrapper = styled(Paper)({
  padding: '1rem 2rem',
  minHeight: '25rem',
});

type StatsCardProps = { $side: OrderType };

export const StatsCard = styled(Card)(({ $side }: StatsCardProps) => ({
  background:
    $side === ORDERS_CONST.BID
      ? 'linear-gradient(to bottom, #2194ff78, transparent)'
      : 'linear-gradient(to bottom, #a0a04e, transparent)',
  borderRadius: '.8rem',
}));
