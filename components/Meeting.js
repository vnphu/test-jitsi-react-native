import React, {useCallback, useRef} from 'react';

import {JitsiMeeting} from '@jitsi/react-native-sdk/index';

import {useNavigation} from '@react-navigation/native';

const Meeting = ({route}) => {
  const jitsiMeeting = useRef(null);
  const navigation = useNavigation();

  const room = '651b74bc677dcaa634d173cb';
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250ZXh0Ijp7InVzZXIiOnsiYXZhdGFyIjoiaHR0cHM6Ly9zMy5hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tL21pZ2h0eWlkLzYzYTNmNGIzZjI5MDNjMmMxYzM3NDUxNS82NGUzMTYwNjg3NTZmYWJjMWUxNDdhYTkvbG9nby1taWdodHlpZC1mdWxsLTEucG5nIiwibmFtZSI6IjIyIiwiZW1haWwiOiI2NTFiNzRiYzY3N2RjYWE2MzRkMTczY2RAbWlnaHR5aWQuY2EiLCJpZCI6IjY1MWI3NGJjNjc3ZGNhYTYzNGQxNzNjZCJ9fSwiYXVkIjoibWlnaHR5aWQuY2EiLCJpc3MiOiJtaWdodHlpZC5jYSIsInN1YiI6InI4Lm1pZ2h0eWlkLmNhIiwicm9vbSI6IjY1MWI3NGJjNjc3ZGNhYTYzNGQxNzNjYiIsImV4cCI6MTY5NjMwMDU3MjMzMCwibW9kZXJhdG9yIjpmYWxzZSwiaWF0IjoxNjk2Mjk4MTcyfQ.btt_ZrhjwxOgXAREzlwZKANDtlUUOgr05Xb1kA26j1A';

  const onReadyToClose = useCallback(() => {
    // @ts-ignore
    navigation.navigate('Home');
    // @ts-ignore
    jitsiMeeting.current.close();
  }, [navigation]);

  const eventListeners = {
    onReadyToClose,
  };

  return (
    // @ts-ignore
    <JitsiMeeting
      eventListeners={eventListeners}
      ref={jitsiMeeting}
      style={{flex: 1}}
      token={token}
      room={room}
      serverURL={'https://meet.jit.si'}
    />
  );
};

export default Meeting;
