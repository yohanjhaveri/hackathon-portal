import { Text } from "@chakra-ui/react";

export type DetailsCardEmailProps = {
  email: string;
};

export const DetailsCardEmail = ({ email }: DetailsCardEmailProps) => (
  <Text fontSize="sm" color="blue.500" _hover={{ textDecor: "underline" }} alignSelf="flex-start">
    <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
      {email}
    </a>
  </Text>
);
