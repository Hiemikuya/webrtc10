import React from 'react';

import InputForms from './InputForms';
import VideoArea from './VideoArea';
import useRtcClient from './hooks/useRtcClient';

const App = () =>  {
  const rtcClient = useRtcClient();

  // if (rtcClient === null) return <></>;

  return (
    <>
      <InputForms rtcClient={rtcClient} />
      <VideoArea rtcClient={rtcClient} />
    </>
  );
};

export default App;
