import { Paper, Stack, Typography } from '@mui/material';

function OrderBook() {
  return (
    <Paper>
      <Stack direction="row" gap={2}>
        <Typography variant="subtitle1">Market Size</Typography>
        <Typography variant="subtitle1">Price(USD)</Typography>
        <Typography variant="subtitle1">Total</Typography>
      </Stack>
    </Paper>
  );
}

export default OrderBook;
