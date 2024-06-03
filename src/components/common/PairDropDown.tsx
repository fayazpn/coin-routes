import { ALLOWED_PAIRS, ROUTES } from '@app/constants/appConstants';
import {
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function PairDropDown() {
  const navigate = useNavigate();
  const params = useParams();
  const [pairname, setPairname] = useState<string | undefined>(params?.id);

  useEffect(() => {
    setPairname(params?.id);
  }, [params.id]);

  const changeRoute = (event: SelectChangeEvent) => {
    const { value } = event.target;

    navigate(`${ROUTES.EXCHANGE}/${value}`);
  };

  return (
    <Stack direction="row" alignItems="center" gap={2}>
      <InputLabel id="currency-pair-label">Selected Currency Pair</InputLabel>
      <Select
        labelId="currency-pair-label"
        value={pairname}
        defaultValue={pairname}
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
