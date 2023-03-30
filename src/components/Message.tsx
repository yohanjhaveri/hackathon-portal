import { Box, Center, Heading, Text } from "@chakra-ui/react";

export type MessageProps = {
  heading: string;
  body: string;
};

export const Message = ({ heading, body }: MessageProps) => (
  <Center h="100dvh">
    <Box w="xl">
      <Heading size="sm" color="brand.500" fontWeight="extrabold" mb="3">
        {heading}
      </Heading>
      <Text fontSize="lg" color="muted">
        {body}
      </Text>
    </Box>
  </Center>
);
