// Hook for websocket connections

import { WS_API_URL } from '@app/constants/appConstants';
import { isAllowedPair } from '@app/utils/utils';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useWebSocket from 'react-use-websocket';

export default function useWS(
  channelName: string,
  processFunc: (event: MessageEvent) => void
) {
  const params = useParams();
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
        product_ids: [params.id],
        ...((channelName === 'ticker_batch' ||
          channelName === 'heartbeats') && {
          jwt: 'XYZ',
        }),
      };

      sendJsonMessage(unSubscribeMessage);

      const subscribeMessage = {
        type: 'subscribe',
        channel: channelName,
        product_ids: [params.id],
        ...((channelName === 'ticker_batch' ||
          channelName === 'heartbeats') && {
          jwt: 'XYZ',
        }),
      };
      sendJsonMessage(subscribeMessage);
    }
    if (params.id && isAllowedPair(params.id)) connect();
  }, [sendJsonMessage, getWebSocket, params.id, channelName]);
}
