import { Box, Text } from "@chakra-ui/react";

type NavigationHeaderProps = {
  name: string;
};

export const NavigationHeader = ({ name }: NavigationHeaderProps) => (
  <Box w="100%" px="4" py="3" bg="white" borderBottomWidth="1px" borderBottomColor="gray.200">
    <Text color="gray.700" fontSize="md" fontWeight="700">
      {name}
    </Text>
  </Box>
);
