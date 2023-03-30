import { Stack } from "@chakra-ui/react";

export type NavigationContainerProps = {
  children: React.ReactNode;
};

export const NavigationContainer = ({ children }: NavigationContainerProps) => (
  <Stack
    w="64"
    h="100%"
    pos="fixed"
    bg="gray.50"
    borderRightWidth="1px"
    borderRightColor="gray.200"
    spacing="4"
  >
    {children}
  </Stack>
);
