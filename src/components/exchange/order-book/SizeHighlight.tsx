import { ORDERS_CONST } from '@app/constants/appConstants';
import { OrderType } from '@app/types/types';

type SizeHighlightType = {
  depth: number;
  orderType: OrderType;
};

const DepthVisualizerColors = {
  BIDS: '#113534',
  ASKS: '#3d1e28',
};

function SizeHighlight({ depth, orderType }: SizeHighlightType) {
  return (
    <div
      data-testid="depth-visualizer"
      style={{
        backgroundColor: `${orderType === ORDERS_CONST.BID ? DepthVisualizerColors.BIDS : DepthVisualizerColors.ASKS}`,
        height: '100%',
        width: `${depth}%`,
        position: 'absolute',
        top: 0,
        zIndex: -1,
        // border: '1px solid white',
      }}
    />
  );
}

export default SizeHighlight;
