import React from 'react';
import {
  Modal,
  Button,
  ScrollView,
  Text,
  Center,
  VStack,
  NativeBaseProvider,
  KeyboardAvoidingView,
} from 'native-base';
import {Platform} from 'react-native';

const ModalForm = props => {
  let {isOpen, onClose, size, title, content, footer} = props;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={size}
      animationPreset="slide">
      <KeyboardAvoidingView style={{width: '100%'}} behavior={'position'}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>{title}</Modal.Header>
          <Modal.Body>{content}</Modal.Body>
          <Modal.Footer>{footer}</Modal.Footer>
        </Modal.Content>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default ModalForm;
