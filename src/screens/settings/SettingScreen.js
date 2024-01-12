import React from 'react';
import {Box, Text, VStack, HStack, Heading} from 'native-base';
import {StyleSheet} from 'react-native';

const SettingScreen = () => {
  return (
    <Box style={{flex: 1}} bg="#fff">
      <Box mx={7} my={5}>
        <VStack my={5} space={3}>
          <Heading style={styles.txtColor}>SETTINGS</Heading>

          <Box></Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  txtColor: {
    color: '#3c3e4f',
  },
});
