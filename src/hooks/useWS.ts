// Hook for websocket connections

import { WS_API_URL } from '@app/constants/appConstants';
import { isAllowedPair } from '@app/utils/utils';
import { useEffect } from 'react';
import useWebSocket from 'react-use-websocket';

export default function useWS(
  channelName: string,
  productId: string | undefined,
  processFunc: (event: MessageEvent) => void
) {
  const { sendJsonMessage, getWebSocket } = useWebSocket(WS_API_URL, {
    share: true,
    shouldReconnect: () => true,
    onMessage: (event: WebSocketEventMap['message']) => processFunc(event),
  });

  useEffect(() => {
    function connect() {
      const unSubscribeMessage = {
        type: 'unsubscribe',
        channel: channelName,
        product_ids: [productId],
      };
      sendJsonMessage(unSubscribeMessage);

      const subscribeMessage = {
        type: 'subscribe',
        channel: channelName,
        product_ids: [productId],
      };
      sendJsonMessage(subscribeMessage);
    }
    if (productId && isAllowedPair(productId)) connect();
  }, [sendJsonMessage, getWebSocket, productId, channelName]);
}
