import React, {useState} from 'react';
import {
  Fab,
  Box,
  Icon,
  IconButton,
  Center,
  HStack,
  Avatar,
  VStack,
  Text,
  Spacer,
  Heading,
  Input,
  Pressable,
  Modal,
  Button,
} from 'native-base';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// components
import ModalForm from '../components/ModalForm';

const ContactScreen = ({navigation}) => {
  const [openForm, setOpenForm] = useState(false);

  const handlePressContact = () => {
    navigation.navigate('ContactDetail');
  };

  const handleAddContact = () => {
    setOpenForm(true);
  };

  const onCloseForm = () => {
    setOpenForm(false);
  };

  const handleSave = () => {
    console.log('submit');
  };
  return (
    <>
      <Box style={{flex: 1}} bg="#fff">
        <Box mx={7} my={5}>
          <VStack my={5} space={3}>
            <Heading style={styles.txtColor}>CONTACTS</Heading>
            <Input
              InputLeftElement={
                <Icon
                  as={<IonIcons name="search-outline" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              placeholder="Search"
            />
          </VStack>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <TouchableOpacity onPress={handlePressContact}>
                <Box
                  pl={['0', '5']}
                  // pr={['0', '5']}
                  py="3">
                  <HStack space={[2, 3]}>
                    <Avatar
                      size="48px"
                      source={{
                        uri: item.avatarUrl,
                      }}
                    />
                    <VStack>
                      <Text
                        _dark={{
                          color: 'warmGray.50',
                        }}
                        color="coolGray.800"
                        bold>
                        {item.fullName}
                      </Text>
                      <Text
                        color="coolGray.600"
                        _dark={{
                          color: 'warmGray.200',
                        }}>
                        {item.recentText}
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </Box>

        {/* add button */}
        <Center
          style={{
            position: 'absolute',
            bottom: 0,
            right: 10,
          }}>
          <Fab
            onPress={handleAddContact}
            bg="#ff64cf"
            _pressed={{
              bg: '#b34691',
            }}
            renderInPortal={false}
            shadow={2}
            size="sm"
            icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />}
          />
        </Center>
      </Box>
      <ModalForm
        isOpen={openForm}
        size={'full'}
        title="Add Contact"
        content={
          <Box my={5}>
            <VStack space={3}>
              <Center>
                <Avatar
                  size="xl"
                  bg="#a2abd4"
                  source={{
                    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                  }}
                />
              </Center>
              <Input variant="underlined" placeholder="First Name" />
              <Input variant="underlined" placeholder="Last Name" />
              <Input variant="underlined" placeholder="Phone Number" />
              <Input variant="underlined" placeholder="Umur" type="number" />
            </VStack>
          </Box>
        }
        footer={
          <Button
            rounded={100}
            px={10}
            onPress={handleSave}
            bg="#ff64cf"
            _pressed={{
              bg: '#b34691',
            }}>
            Save
          </Button>
        }
        onClose={onCloseForm}
      />
    </>
  );
};

export default ContactScreen;

const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    fullName: 'Aafreen Khan',
    timeStamp: '12:47 PM',
    recentText: 'Good Day!',
    avatarUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    fullName: 'Sujitha Mathur',
    timeStamp: '11:11 PM',
    recentText: 'Cheer up, there!',
    avatarUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    fullName: 'Anci Barroco',
    timeStamp: '6:22 PM',
    recentText: 'Good Day!',
    avatarUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
  },
  {
    id: '68694a0f-3da1-431f-bd56-142371e29d72',
    fullName: 'Aniket Kumar',
    timeStamp: '8:56 PM',
    recentText: 'All the best',
    avatarUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
  },
  {
    id: '28694a0f-3da1-471f-bd96-142456e29d72',
    fullName: 'Kiara',
    timeStamp: '12:47 PM',
    recentText: 'I will call today.',
    avatarUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
  },
];

const styles = StyleSheet.create({
  txtColor: {
    color: '#3c3e4f',
  },
});
