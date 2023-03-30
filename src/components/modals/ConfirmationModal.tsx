import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

export type ConfirmationModalProps = {
  title: string;
  body: string;
  action: string;
  onClose: () => void;
  onClick: () => void;
};

export const ConfirmationModal = ({ title, body, action, onClose, onClick }: ConfirmationModalProps) => (
  <Modal onClose={onClose} isOpen={true} isCentered>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader pb="0" color="brand.500" fontWeight="bold">
        {title}
      </ModalHeader>
      <ModalBody color="muted">{body}</ModalBody>
      <ModalFooter mt="6">
        <HStack>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="brand" onClick={onClick}>
            {action}
          </Button>
        </HStack>
      </ModalFooter>
    </ModalContent>
  </Modal>
);
