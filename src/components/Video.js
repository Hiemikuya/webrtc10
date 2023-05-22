import React, { useRef, useState } from 'react';
import {Card, CardActions, CardContent, Typography} from '@mui/material';

import VolumeButton from './VolumeButton';
import useDimensions from './hooks/useDimensions';

const Video = ({ isLocal, name, rtcClient, videoRef }) => {
  const [muted, setMuted] = useState(rtcClient.initialAudioMuted);
  const refCard = useRef(null);
  const dimensionsCard = useDimensions(refCard);


  return (
    <Card ref={refCard}>
      <video autoPlay muted={isLocal || muted} ref={videoRef} width={dimensionsCard.width} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <VolumeButton isLocal={isLocal} muted={muted} rtcClient={rtcClient} setMuted={setMuted} />
      </CardActions>
    </Card>
  );
}

export default Video;