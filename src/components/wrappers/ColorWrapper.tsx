import { Box, Flex } from "@chakra-ui/react";

export type ColorWrapperProps = {
  children: React.ReactNode;
};

export const ColorWrapper = ({ children }: ColorWrapperProps) => (
  <Box w="100%">
    <Box height="48" bg="brand.600" />
    <Flex justify="center" align="center">
      {children}
    </Flex>
  </Box>
);
