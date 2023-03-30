import { Button, HStack } from "@chakra-ui/react";
import { copy } from "../../../config";

export type RegistrationFormButtonsProps = {
  onComplete: () => void;
};

export const RegistrationFormButtons = ({ onComplete }: RegistrationFormButtonsProps) => (
  <HStack justify="flex-end" mt="5">
    <Button variant="primary" isLoading={false} onClick={onComplete}>
      {copy.userRegistrationForm.submitButton.text}
    </Button>
  </HStack>
);
