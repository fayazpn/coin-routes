import * as S from '@app/layouts/MainLayout/MainLayout.styles';
import { Box, Stack, Typography } from '@mui/material';

function Header() {
  return (
    <Box width="100%" sx={{ backdropFilter: 'blur(1.5rem)' }}>
      <S.TopNavWrapper>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          mx="auto"
        >
          <Typography>CR Exchange</Typography>
          <Typography>Demo Account</Typography>
        </Stack>
      </S.TopNavWrapper>
    </Box>
  );
}

export default Header;
