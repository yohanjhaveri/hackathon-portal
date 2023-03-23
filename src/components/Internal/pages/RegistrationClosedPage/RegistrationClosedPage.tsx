import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { FlowWrapper } from "../../components/reusable/FlowWrapper";
import { unique } from "../../../../config";

export const RegistrationClosedPage = () => (
  <FlowWrapper>
    <Flex h="100vh" justify="center" align="center">
      <Box w="600px">
        <Heading size="sm" color="brand.500" fontWeight="extrabold" mb="12px">
          Sorry, we have closed registration at this time :(
        </Heading>
        <Text fontSize="lg">Unfortunately the registration for {unique.eventName} is now closed.</Text>
      </Box>
    </Flex>
  </FlowWrapper>
);
