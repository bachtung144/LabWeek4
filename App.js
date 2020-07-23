import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import DashBoard from './src/DashBoard';
import Profile from './src/Profile';
const Stack = createStackNavigator();

function MyStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="DashBoard" component={DashBoard} />
      </Stack.Navigator>
  );
}
const Tab = createBottomTabNavigator();
export default function App() {
  return(
      <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="DashBoard" component={MyStack} />
            <Tab.Screen name="Profile" component={Profile} />
          </Tab.Navigator>
      </NavigationContainer>
  )
}
