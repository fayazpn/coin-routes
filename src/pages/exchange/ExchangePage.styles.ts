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
  borderRadius: '.8em',
  marginTop: '1em',
  minWidth: '42rem',
}));

// ---------------------

export const PairGraphWrapper = styled(Paper)({
  padding: '1rem 2rem',
  minHeight: '25rem',
});

export const PairGraphContainer = styled(Paper)({
  marginTop: '3rem',
  border: 0,
});

// -----------------

export const OrderBookWrapper = styled(Paper)({
  padding: '1em 2em',
  minHeight: '25rem',
});

export const OrderBookContainer = styled(Box)({
  maxWidth: '45em',
  marginTop: '2em',
  marginInline: 'auto',
});

export const RowLabel = styled(Paper)({
  padding: '.5em',
  marginInline: 'auto',
});

export const RowData = styled(Paper)({
  marginInline: 'auto',
  border: 0,
  // marginBottom: '-.5em',
  position: 'relative',
  zIndex: 2,
});

export const SpreadContainer = styled(Paper)({
  padding: '.5em',
  margin: '.8em 0',
});

export const AggrigateContainer = styled(Paper)({
  padding: '0.5em',
  marginTop: '1em',
});
