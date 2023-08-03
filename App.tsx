import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/navigations/NavTab';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Routes />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default App;
