import { ORDERS_CONST } from '@app/constants/appConstants';

export type OrderType = (typeof ORDERS_CONST)[keyof typeof ORDERS_CONST];

export type AllowedPairs = 'BTC-USD' | 'ETH-USD ' | 'LTC-USD' | 'BCH-USD';

export type CandlestickDataType = [
  number,
  number,
  number,
  number,
  number,
  string,
];
