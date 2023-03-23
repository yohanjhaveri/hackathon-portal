import { Box, Flex } from "@chakra-ui/react";
import { Navigation } from "../navigation/Navigation";

export type PageWrapperProps = {
  children: React.ReactNode;
};

export const PageWrapper = ({ children }: PageWrapperProps) => (
  <Flex bg="gray.100" minH="100vh">
    <Box minW="260px">
      <Navigation />
    </Box>
    {children}
  </Flex>
);
