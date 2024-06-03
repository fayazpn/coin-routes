import { ALLOWED_PAIRS, ROUTES } from '@app/constants/appConstants';
import { isAllowedPair } from '@app/utils/utils';
import {
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

function PairDropDown() {
  const navigate = useNavigate();
  const params = useParams();

  const changeRoute = (event: SelectChangeEvent) => {
    const { value } = event.target;

    navigate(`${ROUTES.EXCHANGE}/${value}`);
  };
  return (
    <Stack direction="row" alignItems="center" gap={2}>
      <InputLabel id="currency-pair-label">Selected Currency Pair</InputLabel>
      <Select
        labelId="currency-pair-label"
        id="demo-simple-select"
        defaultValue={isAllowedPair(params.id) ? params.id : '-'}
        value={params.id}
        onChange={changeRoute}
      >
        {ALLOWED_PAIRS.map((pair: string) => (
          <MenuItem key={pair} value={pair}>
            {pair}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
}

export default PairDropDown;
