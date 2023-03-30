import { Text } from "@chakra-ui/react";

type NavigationHeadingProps = {
  children: React.ReactNode;
};

export const NavigationHeading = ({ children }: NavigationHeadingProps) => (
  <Text px="2" color="gray.600" fontSize="xs" fontWeight="bold" lineHeight="1.25">
    {children}
  </Text>
);
