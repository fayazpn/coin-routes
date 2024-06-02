/* eslint-disable no-console */
import { WS_API_URL } from '@app/constants/appConstants';
import { useEffect } from 'react';
import useWebSocket from 'react-use-websocket';

function PairGraph() {
  const { sendJsonMessage, getWebSocket } = useWebSocket(WS_API_URL, {
    share: true,
    onOpen: () => console.log('WebSocket connection opened.'),
    onClose: () => console.log('WebSocket connection closed.'),
    shouldReconnect: () => true,
  });

  useEffect(() => {
    function connect() {
      const unSubscribeMessage = {
        type: 'unsubscribe',
        channel: 'level2',
        product_ids: ['ETH-USD'],
      };
      sendJsonMessage(unSubscribeMessage);

      const subscribeMessage = {
        type: 'subscribe',
        channel: 'level2',
        product_ids: ['ETH-USD'],
      };
      sendJsonMessage(subscribeMessage);
    }

    connect();
  }, [sendJsonMessage, getWebSocket]);

  return <div>PairGraph</div>;
}

export default PairGraph;
