import React, {useState, useEffect, useCallback} from 'react';
import {Fab, Box, Icon, VStack, Center, Heading, Text} from 'native-base';
import {StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {GiftedChat} from 'react-native-gifted-chat';


const MessageScreen = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <>
      <Box mx={7} my={5}>
        <Heading style={styles.txtColor}>MESSAGES</Heading>
      </Box>
      <GiftedChat
        messages={messages}
        text={text}
        onInputTextChanged={setText}
        onSend={messages => onSend(messages)}
        renderAvatarOnTop
        renderUsernameOnMessage
        alignTop
        alwaysShowSend
        scrollToBottom
        bottomOffset={26}
        user={{
          _id: 1,
          name: 'Aaron',
          avatar: 'https://placeimg.com/150/150/any',
        }}
      />
    </>
    // <Box style={{flex: 1}}>
    //   <Box mx={7} my={5}>
    //     <VStack space={3} my={5}>
    //

    //       <Box>
    //         <Text>Testing Messages</Text>
    //         <GiftedChat
    //           messages={messages}
    //           user={{
    //             _id: 1,
    //             name: 'mshueco',
    //           }}
    //         />
    //       </Box>
    //     </VStack>
    //   </Box>
    //   <Center
    //     style={{
    //       position: 'absolute',
    //       bottom: 0,
    //       right: 10,
    //     }}>
    //     <Fab
    //       bg="#ff64cf"
    //       renderInPortal={false}
    //       shadow={2}
    //       size="sm"
    //       icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />}
    //     />
    //   </Center>
    // </Box>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  txtColor: {
    color: '#3c3e4f',
  },
});
