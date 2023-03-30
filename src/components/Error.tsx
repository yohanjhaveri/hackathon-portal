import { Heading, Text, VStack } from "@chakra-ui/react";

export type ErrorProps = {
  heading: string;
  body: string;
};

export const Error = ({ heading, body }: ErrorProps) => (
  <VStack justify="center" h="100dvh">
    <Heading size="xs">{heading}</Heading>
    <Text>{body}</Text>
  </VStack>
);
