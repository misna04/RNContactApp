import React from 'react';
import {
  Modal,
  Button,
  ScrollView,
  Text,
  Center,
  VStack,
  NativeBaseProvider,
} from 'native-base';

const ModalForm = props => {
  let {isOpen, onClose, size, title, content, footer} = props;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={size}
      animationPreset="slide">
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer>{footer}</Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default ModalForm;
