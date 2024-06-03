import { ALLOWED_PAIRS, ORDERBOOK_LEVELS } from '@app/constants/appConstants';
import { AllowedPairs, CandlestickDataType } from '@app/types/types';

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

export const removePriceLevel = (
  price: number,
  levels: number[][]
): number[][] => levels.filter((level) => level[0] !== price);

export const updatePriceLevel = (
  updatedLevel: number[],
  levels: number[][]
): number[][] => {
  return levels.map((level) => {
    if (level[0] === updatedLevel[0]) {
      // level = updatedLevel;
      return updatedLevel;
    }
    return level;
  });
};

export const levelExists = (
  deltaLevelPrice: number,
  currentLevels: number[][]
): boolean => currentLevels.some((level) => level[0] === deltaLevelPrice);

export const addPriceLevel = (
  deltaLevel: number[],
  levels: number[][]
): number[][] => {
  return [...levels, deltaLevel];
};

/** The orders returned by the feed are in the format
 of [price, size][].
 * @param currentLevels Existing price levels - `bids` or `asks`
 * @param orders Update of a price level
 */
export const applyDeltas = (
  currentLevels: number[][],
  orders: number[][]
): number[][] => {
  let updatedLevels: number[][] = currentLevels;

  orders.forEach((deltaLevel) => {
    const deltaLevelPrice = deltaLevel[0];
    const deltaLevelSize = deltaLevel[1];

    // If new size is zero - delete the price level
    if (deltaLevelSize === 0 && updatedLevels.length > ORDERBOOK_LEVELS) {
      updatedLevels = removePriceLevel(deltaLevelPrice, updatedLevels);
    } else {
      // If the price level exists and the size is not zero, update it
      // eslint-disable-next-line no-lonely-if
      if (levelExists(deltaLevelPrice, currentLevels)) {
        updatedLevels = updatePriceLevel(deltaLevel, updatedLevels);
      } else if (updatedLevels.length < ORDERBOOK_LEVELS) {
        // If the price level doesn't exist in the orderbook and there are less than 25 levels, add it

        updatedLevels = addPriceLevel(deltaLevel, updatedLevels);
      }
    }
  });

  return updatedLevels;
};

export const addTotalSums = (orders: number[][]): number[][] => {
  const totalSums: number[] = [];

  return orders.map((order: number[], idx) => {
    const size: number = order[1];
    if (typeof order[2] !== 'undefined') {
      return order;
    }
    const updatedLevel = [...order];
    const totalSum: number = idx === 0 ? size : size + totalSums[idx - 1];
    updatedLevel[2] = totalSum;
    totalSums.push(totalSum);
    return updatedLevel;
  });
};

export const addDepths = (orders: number[][], maxTotal: number): number[][] => {
  return orders.map((order) => {
    if (typeof order[3] !== 'undefined') {
      return order;
    }
    const calculatedTotal: number = order[2];
    const depth = (calculatedTotal / maxTotal) * 100;
    const updatedOrder = [...order];
    updatedOrder[3] = depth;
    return updatedOrder;
  });
};

export const getMaxTotalSum = (orders: number[][]): number => {
  const totalSums: number[] = orders.map((order) => order[2]);
  return Math.max.apply(Math, totalSums);
};
