import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserListScreen from '../screens/user-list/UserListScreen';
import ChatRoom from '../screens/chat-room/ChatRoom';
import DashboardTabsNavigator from './DashboardTabs';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Dashboard" component={DashboardTabsNavigator} />
        <Stack.Screen name="UserList" component={UserListScreen} />
        <Stack.Screen name="ChatRoom" component={ChatRoom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
