import { OrderType } from '@app/types/types';
import { Card, Paper, styled } from '@mui/material';

export const BestStatsWrapper = styled(Paper)({
  padding: '1rem 2rem',
  minHeight: '25rem',
});

type StatsCardProps = { $side: OrderType };

export const StatsCard = styled(Card)(({ $side }: StatsCardProps) => ({
  background:
    $side === 'buy'
      ? 'linear-gradient(to bottom, #2194ff78, transparent)'
      : 'linear-gradient(to bottom, #a0a04e, transparent)',
  borderRadius: '.8rem',
}));
