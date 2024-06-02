/* eslint-disable no-console */
import { candlesticksDataFormatter, isAllowedPair } from '@app/utils/utils';
import { useTheme } from '@mui/material';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';

import useWS from '@app/hooks/useWS';
import * as S from '@app/pages/exchange/ExchangePage.styles';
import { CandlestickDataType } from '@app/types/types';

function PairGraph() {
  const params = useParams();
  const [chartData, setChartData] = useState<CandlestickDataType[]>();
  const theme = useTheme();

  const processMessage = useCallback((event: MessageEvent) => {
    try {
      const data = JSON.parse(event.data);
      if (data.sequence_num) {
        const { events } = data;

        if (Array.isArray(events) && events.length > 0) {
          const { candles } = events[0];
          if (Array.isArray(candles) && candles.length > 0) {
            const newDataPoint = candlesticksDataFormatter(candles[0]);

            setChartData((currentData) => {
              if (currentData) {
                return [...currentData, newDataPoint];
              }
              return [newDataPoint];
            });
          }
        }
      }
    } catch (error) {
      console.error('Error parsing message data:', error);
    }
  }, []);

  useWS('candles', params.id, processMessage);

  // Chart configuration options
  const chartOptions: Highcharts.Options = {
    title: {
      text: 'BTC-USD Chart',
    },
    chart: {
      backgroundColor: 'rgb(10, 11, 13)',
      borderColor: 'rgb(50, 53, 61)',
      borderWidth: 1,
      height: 450,
    },
    plotOptions: {
      candlestick: {
        color: `${theme.palette.error.main}`,
        upColor: `${theme.palette.success.main}`,
        lineColor: `${theme.palette.error.main}`,
        upLineColor: `${theme.palette.success.main}`,
        pointWidth: 15, // Adjust width here
      },
    },
    series: [
      {
        type: 'candlestick',
        name: 'BTC-USD Price',
        data: chartData,
      },
    ],
    xAxis: {
      type: 'datetime',
      gridLineWidth: 1,
      zoomEnabled: false,
      gridLineColor: 'rgb(50, 53, 61)',
    },
    yAxis: {
      title: {
        text: 'Price',
      },
      gridLineColor: 'rgb(50, 53, 61)',
    },
    rangeSelector: {
      labelStyle: {
        color: `${theme.palette.primary.main}`,
      },
      inputStyle: {
        color: `${theme.palette.primary.main}`,
      },
    },
  };

  if (!params.id || !isAllowedPair(params.id)) return 'No Data';

  if (!chartData) return 'Loading';

  return (
    <S.PairGraphContainer>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType="stockChart"
        options={chartOptions}
      />
    </S.PairGraphContainer>
  );
}

export default PairGraph;
