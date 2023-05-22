import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import VideoLocal from './VideoLocal';
import VideoRemote from './VideoRemote';

const VideoArea = ({ rtcClient }) => {

  if (rtcClient === null) return <></>;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <VideoLocal rtcClient={rtcClient} />
        </Grid>
        <Grid item xs={6}>
          <VideoRemote rtcClient={rtcClient} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default VideoArea;