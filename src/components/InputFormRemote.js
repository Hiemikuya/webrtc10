import React, {useCallback, useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function SignIn({ rtcClient }) {
  const label = '相手の名前';
  const [disabled, setDisabled] = useState(true);
  const [name, setName] = useState('');
  const [isComposed, setIsComposed] = useState(false);

  useEffect(() => {
    const disabled = name === '';
    setDisabled(disabled);
  }, [name]);

  const initializeRemotePeer = useCallback(
    async (e) => {
      await rtcClient.connect(name);
      e.preventDefault();
    }, 
    [name, rtcClient]
  );

  if (rtcClient.localPeerName === '') return <></>;
  if (rtcClient.remotePeerName !== '') return <></>;

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            {label}を入力してください
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label={label}
              name="name"
              autoFocus
              onChange={(e) => setName(e.target.value)}
              onCompositionEnd={() => setIsComposed(false)}
              onCompositionStart={() => setIsComposed(true)}
              onKeyDown={async (e) => {
                if (isComposed) return;
                if (e.target.value === '') return;
                if (e.key === 'Enter') await initializeRemotePeer(e);
              }}
              value={name}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={disabled}
              onClick={async (e) => await  initializeRemotePeer(e)}
            >
              決定
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
