import { Box } from "@chakra-ui/react";
import { NavigationFooter } from "../navigation/NavigationFooter";

export type FlowWrapperProps = {
  children: React.ReactNode;
};

export const FlowWrapper = ({ children }: FlowWrapperProps) => (
  <Box position="relative">
    <Box position="absolute" top="10px" right="10px">
      <NavigationFooter />
    </Box>
    {children}
  </Box>
);
