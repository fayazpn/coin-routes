export const ROUTES = {
  EXCHANGE: '/exchange',
};

export const ORDERS_CONST = {
  BID: 'bid',
  ASK: 'ask',
} as const;

export const ALLOWED_PAIRS = [
  'BTC-USD',
  'ETH-USD',
  'LTC-USD',
  'BCH-USD',
] as const;

export const aggValues = [0.01, 0.05, 0.1, 0.5, 1.0, 2.5, 5.0, 10.0] as const;

// The base URL of the API
export const WS_API_URL = 'wss://advanced-trade-ws.coinbase.com';

export const ORDERBOOK_LEVELS = 25;
