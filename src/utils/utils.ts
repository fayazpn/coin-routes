import { ALLOWED_PAIRS } from '@app/constants/appConstants';
import { AllowedPairs } from '@app/types/types';

// eslint-disable-next-line import/prefer-default-export
export const isAllowedPair = (pair: string): pair is AllowedPairs => {
  return (ALLOWED_PAIRS as readonly string[]).includes(pair);
};
