import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import DashBoard from './src/DashBoard';
import Profile from './src/Profile';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="DashBoard" component={DashBoard} />
    </Stack.Navigator>
  );
}
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color}) => {
            if (route.name === 'DashBoard') {
              let iconName = focused
                ? 'view-dashboard-variant'
                : 'view-dashboard-variant-outline';
              return (
                <MaterialCommunityIcon
                  name={iconName}
                  size={25}
                  color={color}
                />
              );
            } else if (route.name === 'Profile') {
              let iconName = focused ? 'user' : 'user-o';
              return (
                <FontAwesomeIcon name={iconName} size={25} color={color} />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="DashBoard" component={MyStack} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
