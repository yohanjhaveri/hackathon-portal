import { Box } from "@chakra-ui/react";
import { NavigationFooter } from "../navigation/NavigationFooter";

export type FlowWrapperProps = {
  children: React.ReactNode;
};

export const FlowWrapper = ({ children }: FlowWrapperProps) => (
  <Box position="relative">
    <Box position="absolute" top="2.5" right="2.5">
      <NavigationFooter />
    </Box>
    {children}
  </Box>
);
