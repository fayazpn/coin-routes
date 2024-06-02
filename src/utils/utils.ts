import { ALLOWED_PAIRS } from '@app/constants/appConstants';
import { AllowedPairs, CandlestickDataType } from '@app/types/types';

// eslint-disable-next-line import/prefer-default-export
export const isAllowedPair = (pair: string): pair is AllowedPairs => {
  return (ALLOWED_PAIRS as readonly string[]).includes(pair);
};

export const candlesticksDataFormatter = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  candlesData: any
): CandlestickDataType => {
  const timestamp = candlesData.start * 1000;
  return [
    timestamp,
    parseFloat(candlesData.open),
    parseFloat(candlesData.high),
    parseFloat(candlesData.low),
    parseFloat(candlesData.close),
    new Date(timestamp).toLocaleString(),
  ];
};
