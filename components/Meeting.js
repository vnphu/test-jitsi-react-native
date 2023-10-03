import React, {useCallback, useRef} from 'react';

import {JitsiMeeting} from '@jitsi/react-native-sdk/index';

import {useNavigation} from '@react-navigation/native';

const Meeting = ({route}) => {
  const jitsiMeeting = useRef(null);
  const navigation = useNavigation();

  const room = '651b74bc677dcaa634d173cb';

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
      room={room}
      serverURL={'https://meet.jit.si'}
    />
  );
};

export default Meeting;
