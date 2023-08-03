import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ContactScreen from '../screens/ContactScreen';
import ContactDetailScreen from '../screens/ContactDetailScreen';

const ContactStack = createNativeStackNavigator();

const ContactStackScreen = () => {
  return (
    <ContactStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ContactStack.Screen name="Contact" component={ContactScreen} />
      <ContactStack.Screen
        name="ContactDetail"
        component={ContactDetailScreen}
      />
    </ContactStack.Navigator>
  );
};

export default ContactStackScreen;
