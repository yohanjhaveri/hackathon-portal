import { Box, Heading, Text } from "@chakra-ui/react";
import { User } from "firebase/auth";
import { copy } from "../../../config";

export type RegistrationFormHeadProps = {
  user: User;
};

export const RegistrationFormHead = ({ user }: RegistrationFormHeadProps) => (
  <Box mb="8">
    <Heading size="xs" mt="12">
      {copy.userRegistrationForm.title.prefix.text} {user.displayName?.split(" ")[0]}!
    </Heading>
    <Text color="blue.500" mb="5">
      {user.email}
    </Text>
    <Text color="gray.500">{copy.userRegistrationForm.subtitle.text}</Text>
  </Box>
);
