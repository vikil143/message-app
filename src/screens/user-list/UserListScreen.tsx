import React from 'react';
import {View, Text} from 'react-native';
import {commonStyles} from '../../utility/commonStyles';
import Header from './components/Header';

const UserListScreen = () => {
  return (
    <View style={[commonStyles.flexOne, commonStyles.white]}>
      <Header />
    </View>
  );
};

export default UserListScreen;
