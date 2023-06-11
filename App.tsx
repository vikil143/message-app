/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import RootNavigator from './src/routes/RootNavigator';
import {commonStyles} from './src/utility/commonStyles';
import {Colors} from './src/utility/Colors';

function App(): JSX.Element {
  return (
    <SafeAreaView style={[commonStyles.flexOne]}>
      <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
      <RootNavigator />
    </SafeAreaView>
  );
}

export default App;
