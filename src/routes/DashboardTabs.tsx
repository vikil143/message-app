import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UserListScreen from '../screens/user-list/UserListScreen';
import ChatedUsersScreen from '../screens/user-list/ChatedUsers';
import DashboardCustomTabs from './components/DashboardCustomTabs';

const Bottom = createBottomTabNavigator();

export default function DashboardTabsNavigator() {
  return (
    <Bottom.Navigator
      screenOptions={{headerShown: false}}
      sceneContainerStyle={{}}
      tabBar={DashboardCustomTabs}>
      <Bottom.Screen name="ChatedUser" component={ChatedUsersScreen} />
      <Bottom.Screen name="UserList" component={UserListScreen} />
    </Bottom.Navigator>
  );
}

const styles = StyleSheet.create({});
