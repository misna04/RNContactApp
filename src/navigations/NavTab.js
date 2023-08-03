import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Icon} from 'native-base';

// screens
import ContactStack from './ContactStack';
import MessageSCreen from '../screens/MessageScreen';
import SettingScreen from '../screens/SettingScreen';

const Tab = createBottomTabNavigator();

const NavTabConfig = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Contact') {
            iconName = focused ? 'call' : 'call-outline';
          } else if (route.name === 'Messages') {
            iconName = focused
              ? 'chatbubble-ellipses'
              : 'chatbubble-ellipses-outline';
          } else if (route.name === 'Setting') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          // You can return any component that you like here!
          return (
            <Icon as={Ionicons} name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: '#3c3e4f',
        tabBarInactiveTintColor: '#a2aad4',
      })}>
      <Tab.Screen name="Contact" component={ContactStack} />
      <Tab.Screen name="Messages" component={MessageSCreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default NavTabConfig;
