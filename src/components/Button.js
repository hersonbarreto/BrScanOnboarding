import React from 'react';
import { Text } from 'react-native';
import Theme from '../../Theme';
import { Button } from 'react-native-paper';


export default (props) => (
  <Button
    mode='contained'
    onPress={props.onPress}
    title={props.text}
    style={{
      backgroundColor: Theme.colors.primary,
      width: '100%',
      height: '10%',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text style={{ fontFamily: Theme.fonts.primary, fontSize: 16, alignSelf: 'center', alignItems: 'center' }}>{props.text}</Text>
  </Button>
);
