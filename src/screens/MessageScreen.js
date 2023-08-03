import React from 'react';
import {Fab, Box, Icon, IconButton, Center, ScrollView} from 'native-base';
import {View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MessageScreen = () => {
  return (
    <Box style={{flex: 1}}>
      <Center
        style={{
          position: 'absolute',
          bottom: 0,
          right: 10,
        }}>
        <Fab
          bg="#ff64cf"
          renderInPortal={false}
          shadow={2}
          size="sm"
          icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />}
        />
      </Center>
    </Box>
  );
};

export default MessageScreen;
