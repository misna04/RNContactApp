import React, {useState} from 'react';
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
  Input,
  Button,
  Popover,
} from 'native-base';
import {Platform, PermissionsAndroid} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import * as ImagePicker from 'react-native-image-picker';

import ModalForm from '../components/ModalForm';
import ModalAlert from '../components/ModalForm';

const ContactDetailScreen = ({navigation}) => {
  const [openForm, setOpenForm] = useState(false);
  const [openOptCamera, setOptCamera] = useState(false);
  const [filePath, setFilePath] = useState({});
  const [confirm, setConfirm] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };
  const handleDelete = () => {};
  const handleOpenForm = () => {
    setOpenForm(true);
  };

  const handleSave = () => {};

  onCloseForm = () => {
    setOpenForm(false);
  };

  const handleOpenCamera = async () => {
    let options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };

    let isCameraPermitted = await requestCameraPermission();
    // let isStoragePermitted = await requestExternalWritePermission();

    // console.log('permission', isCameraPermitted, isStoragePermitted);

    // if (isCameraPermitted && isStoragePermitted)
    if (isCameraPermitted) {
      launchCamera(options, response => {
        console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response.base64);
        console.log('uri -> ', response.uri);
        console.log('width -> ', response.width);
        console.log('height -> ', response.height);
        console.log('fileSize -> ', response.fileSize);
        console.log('type -> ', response.type);
        console.log('fileName -> ', response.fileName);
        setFilePath(response);
      });
    }
  };

  const handleOpenGallery = () => {
    let options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };

    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setFilePath(response);
    });
  };

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  //   const requestExternalWritePermission = async () => {
  //     if (Platform.OS === 'android') {
  //       try {
  //         const granted = await PermissionsAndroid.request(
  //           PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //           {
  //             title: 'External Storage Write Permission',
  //             message: 'App needs write permission',
  //           },
  //         );

  //         console.log('granted', granted);
  //         // If WRITE_EXTERNAL_STORAGE Permission is granted
  //         return granted === PermissionsAndroid.RESULTS.GRANTED;
  //       } catch (err) {
  //         console.warn(err);
  //         alert('Write permission err', err);
  //         return false;
  //       }
  //     } else return true;
  //   };

  const onOpenOptionCamera = () => {
    setOptCamera(!openOptCamera);
  };

  return (
    <Box flex={1} bg="#fff">
      <HStack justifyContent="space-between" alignItems="center" m={2}>
        <IconButton
          onPress={handleBack}
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
      </HStack>
      <Box mx={5}>
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
                    borderRadius="full"
                    colorScheme="violet"
                    variant={'solid'}
                    _icon={{
                      as: IonIcons,
                      name: 'call',
                    }}
                  />
                  <IconButton
                    borderRadius="full"
                    colorScheme="blue"
                    variant={'solid'}
                    _icon={{
                      as: IonIcons,
                      name: 'chatbubble-ellipses',
                    }}
                  />
                  <IconButton
                    borderRadius="full"
                    colorScheme="green"
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

      <Box flex={1} justifyContent="flex-end" alignItems="center">
        <HStack mb={5} space={2}>
          <IconButton
            onPress={handleOpenForm}
            size="md"
            _icon={{
              as: AntDesign,
              name: 'edit',
              color: '#537bf1',
            }}
            _pressed={{
              bgColor: '#c0c9eb',
            }}
          />
          <IconButton
            size="md"
            _icon={{
              as: IonIcons,
              name: 'star-outline',
              color: '#facc15',
            }}
            _pressed={{
              bgColor: '#fef9c3',
            }}
          />

          <IconButton
            onPress={() => setConfirm(true)}
            size="md"
            _icon={{
              as: AntDesign,
              name: 'delete',
              color: '#ef4444',
            }}
            _pressed={{
              bgColor: '#fecaca',
            }}
          />
        </HStack>
      </Box>

      {/* form edit */}
      <ModalForm
        isOpen={openForm}
        size={'full'}
        title="Edit Contact"
        content={
          <Box my={5}>
            <VStack space={3}>
              <Center>
                <Popover
                  trigger={triggerProps => {
                    return (
                      <Pressable {...triggerProps} onPress={onOpenOptionCamera}>
                        <Avatar
                          size="xl"
                          bg="#a2abd4"
                          // source={{
                          //   uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                          // }}
                        />
                      </Pressable>
                    );
                  }}
                  isOpen={openOptCamera}
                  onClose={onOpenOptionCamera}>
                  <Popover.Content accessibilityLabel="Delete Customerd" w="56">
                    <Popover.Arrow />
                    <Popover.CloseButton />
                    <Popover.Header>Photo</Popover.Header>
                    <Popover.Body>
                      <VStack>
                        <Button
                          variant="ghost"
                          colorScheme={'secondary'}
                          onPress={handleOpenCamera}>
                          Take photo
                        </Button>
                        <Button
                          colorScheme={'secondary'}
                          variant="ghost"
                          onPress={handleOpenGallery}>
                          Choose photo from Gallery
                        </Button>
                      </VStack>
                    </Popover.Body>
                  </Popover.Content>
                </Popover>
              </Center>
              <Input variant="underlined" placeholder="First Name" />
              <Input variant="underlined" placeholder="Last Name" />
              <Input variant="underlined" placeholder="Phone Number" />
              <Input variant="underlined" placeholder="Umur" type="number" />
              <Input variant="underlined" placeholder="Photo Url" />
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

      {/* confirm delete */}
      <ModalAlert
        isOpen={confirm}
        onClose={() => setConfirm(false)}
        title="Delete Contact"
        content={<Text>Are you sure to DELETE contact?</Text>}
        footer={<Button colorScheme="danger">Delete</Button>}
      />
    </Box>
  );
};

export default ContactDetailScreen;
