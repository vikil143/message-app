import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SCREEN_HEIGHT} from '../../utility/constants';

export default function DashboardCustomTabs(props) {
  console.log('Custom tab', props.navigation.getState(), props.state);
  return (
    <View style={[styles.container]}>
      <Text>DashboardTabs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    // width: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    top: SCREEN_HEIGHT * 0.85,
  },
});
