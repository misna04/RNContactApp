import React from 'react';
import {
  Box,
  Avatar,
  Text,
  Center,
  HStack,
  Icon,
  IconButton,
  Pressable,
  Heading,
  VStack,
} from 'native-base';
import IonIcons from 'react-native-vector-icons/Ionicons';

const ContactDetailScreen = () => {
  return (
    <Box flex={1} bg="#fff">
      <HStack justifyContent="space-between" alignItems="center" m={2}>
        <IconButton
          size="lg"
          borderRadius="full"
          _pressed={{
            bg: '#5d698e',
            _icon: {
              color: '#fff',
            },
          }}
          variant={'ghost'}
          _icon={{
            as: IonIcons,
            name: 'chevron-back',
            color: '#3c3e4f',
          }}
        />
        <Pressable>
          <Text color="secondary.700">Delete</Text>
        </Pressable>
      </HStack>
      <Box mx={5}>
        {/* <Center>
          <Avatar
            size="xl"
            bg="coolGray.600"
            // source={{
            //   uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            // }}
          />
        </Center> */}
        <Box style={{position: 'absolute', zIndex: 10, left: '36.5%'}}>
          <Avatar
            size="xl"
            bg="#a2abd4"
            // source={{
            //   uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            // }}
          />
        </Box>

        {/* card */}
        <Box mt={50}>
          <Box
            rounded="lg"
            borderColor="coolGray.200"
            shadow={2}
            _dark={{
              borderColor: 'coolGray.600',
              backgroundColor: 'gray.700',
            }}
            _light={{
              backgroundColor: 'gray.50',
            }}>
            <Box p={5}>
              <Box mt={10}>
                <Center>
                  <Text fontSize={28} color="#3c3e4f">
                    MS-HuecoDev
                  </Text>
                  <Text color="#a2abd4">+62 98882773782</Text>
                </Center>
                <HStack
                  justifyContent="center"
                  alignItems="center"
                  mt={10}
                  space={5}>
                  <IconButton
                    colorScheme="indigo"
                    variant={'solid'}
                    _icon={{
                      as: IonIcons,
                      name: 'call',
                    }}
                  />
                  <IconButton
                    colorScheme="indigo"
                    variant={'solid'}
                    _icon={{
                      as: IonIcons,
                      name: 'chatbubble-ellipses',
                    }}
                  />
                  <IconButton
                    colorScheme="indigo"
                    variant={'solid'}
                    _icon={{
                      as: IonIcons,
                      name: 'mail',
                    }}
                  />
                </HStack>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* others details */}
        <VStack mt={10} space={5}>
          <Box>
            <Text color="#a2abd4">Email</Text>
            <Text color="#3c3e4f">default@mail.com</Text>
          </Box>
          <Box>
            <Text color="#a2abd4">Company</Text>
            <Text color="#3c3e4f">Company Name</Text>
          </Box>
          <Box>
            <Text color="#a2abd4">Address</Text>
            <Text color="#3c3e4f">Jl. Address</Text>
          </Box>
          <Box>
            <Text color="#a2abd4">Birthday</Text>
            <Text color="#3c3e4f">10/10/1990</Text>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default ContactDetailScreen;
