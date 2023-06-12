import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './components/Header';
import {commonStyles} from '../../utility/commonStyles';

export default function ChatedUsersScreen() {
  return (
    <View style={[commonStyles.flexOne, commonStyles.white]}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({});
