import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ContactScreen from '../screens/contacts/ContactScreen';
import ContactDetailScreen from '../screens/contacts/ContactDetailScreen';

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
